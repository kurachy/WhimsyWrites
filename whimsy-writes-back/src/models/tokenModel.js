const db = require('../../config/db');

class TokenModel {

  static saveRefreshToken(token, userId) {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO refresh_tokens (token, userId) VALUES (?, ?)', [token, userId], (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  static findRefreshToken(token) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM refresh_tokens WHERE token = ?', [token], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  static getRefreshTokenForUser(userId) {
    return new Promise((resolve, reject) => {
      db.get('SELECT token FROM refresh_tokens WHERE userId = ?', [userId], (err, row) => {
        if (err) reject(err);
        else resolve(row ? row.token : null);
      });
    });
  }
}

module.exports = TokenModel;