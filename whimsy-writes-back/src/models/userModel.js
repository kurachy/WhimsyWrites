const db = require('../../config/db');

class UserModel {
  static async getUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = ?';

    return new Promise((resolve, reject) => {
      db.get(query, [username], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  static async getUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';

    return new Promise((resolve, reject) => {
      db.get(query, [email], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  static async createUser(userData) {
    const { username, fullname, avatar, email, password } = userData;
    const query = 'INSERT INTO users (username, fullname, avatar, email, password) VALUES (?, ?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
      db.run(query, [username, fullname, avatar, email, password], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, username, fullname, avatar, email });
        }
      });
    });
  }

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

module.exports = UserModel;