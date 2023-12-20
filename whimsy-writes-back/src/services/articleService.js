const ArticleModel = require('../models/articleModel');

class ArticleService {
  static async getArticlesWithUserData() {
    return ArticleModel.getArticlesWithUserData();
  }
}

module.exports = ArticleService;
