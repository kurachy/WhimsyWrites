const ArticleService = require('../services/articleService');

class ArticleController {
  static async getArticlesWithUserData(req, res) {
    try {
      const articlesWithUserData = await ArticleService.getArticlesWithUserData();
      res.json(articlesWithUserData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getArticlesByUserId(req, res) {
    const userId = req.params.userId;
    try {
      const articles = await ArticleService.getArticlesByUserId(userId);
      res.status(200).json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ArticleController;
