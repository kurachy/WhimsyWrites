const UserModel = require('../models/userModel');

class UserService {
  static async getUserByUsername(username) {
    return UserModel.getUserByUsername(username);
  }
}

module.exports = UserService;
