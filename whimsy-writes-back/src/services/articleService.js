const ArticleModel = require('../models/articleModel');

class ArticleService {
  static async getArticlesWithUserData() {
    return ArticleModel.getArticlesWithUserData();
  }

  static async getArticlesByUserId(userId) {
    return ArticleModel.getArticlesByUserId(userId);
  }
}

module.exports = ArticleService;
