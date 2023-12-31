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

  static async createUser(userData) {
    const { username, fullname, avatar, email, password } = userData;
    const query = 'INSERT INTO users (username, fullname, avatar, email, password) VALUES (?, ?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
      db.run(query, [username, fullname, avatar, email, password], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID, username, fullname, avatar, email });
        }
      });
    });
  }
}

module.exports = UserModel;