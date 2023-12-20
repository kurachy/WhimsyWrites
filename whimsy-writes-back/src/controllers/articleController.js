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
}

module.exports = ArticleController;
