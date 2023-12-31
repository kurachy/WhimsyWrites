const UserModel = require('../models/userModel');
const { required, email, composeValidators } = require('../validation');


const bcrypt = require('bcrypt');

class UserService {
  static async getUserByUsername(username) {
    return UserModel.getUserByUsername(username);
  }

  static async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const userToCreate = {
      ...userData,
      password: hashedPassword
    };
    return UserModel.createUser(userToCreate);
  }

  static validateSignupData(data) {
    const validations = {
      email: composeValidators(required, email),
      username: required,
      password: required
    };

    let errors = {};

    Object.keys(validations).forEach(field => {
      const validator = validations[field];
      const error = validator(data[field]);
      if (error) {
        errors[field] = error;
      }
    });

    return errors;
  }
}

module.exports = UserService;
