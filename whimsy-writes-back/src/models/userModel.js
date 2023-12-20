const db = require('../config/db');

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
}

module.exports = UserModel;