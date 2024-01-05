const UserModel = require('../models/userModel');
const TokenModel = require('../models/tokenModel')
const { required, email, composeValidators } = require('../validation');
const jwt = require('jsonwebtoken');


const bcrypt = require('bcrypt');
require('dotenv').config();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

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
    const newUser = await UserModel.createUser(userToCreate);

    const accessToken = jwt.sign({ userId: newUser.id }, ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
    const refreshToken = jwt.sign({ userId: newUser.id }, REFRESH_TOKEN_SECRET);
    await TokenModel.saveRefreshToken(refreshToken, newUser.id);

    return { newUser ,accessToken, refreshToken };
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
