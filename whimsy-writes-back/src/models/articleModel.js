const db = require('../../config/db');

class ArticleModel {
  static async getArticlesWithUserData() {
    const query = `
      SELECT articles.id, articles.title, articles.image, articles.time_of_publication,
             articles.categories,author_username ,users.fullname AS author_fullname, users.avatar AS author_avatar
      FROM articles
      JOIN users ON articles.author_username = users.username
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
}

module.exports = ArticleModel;
