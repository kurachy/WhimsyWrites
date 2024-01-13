const db = require('../../config/db');

class ArticleModel {
  static async getArticlesWithUserData() {
    const query = `
      SELECT articles.id, articles.title, articles.image, articles.time_of_publication,
             articles.categories, user_id, users.username AS author_username  ,users.fullname AS author_fullname, users.avatar AS author_avatar
      FROM articles
      JOIN users ON articles.user_id = users.id
    `;

    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  static async getArticlesByUserId(userId) {
    const query = `SELECT * FROM articles WHERE user_id = ?`;

    return new Promise((resolve, reject) => {
      db.all(query, [userId], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

}

module.exports = ArticleModel;
