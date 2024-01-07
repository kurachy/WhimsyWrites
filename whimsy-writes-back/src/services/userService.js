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

  static async getUserById(id) {
    const user = await UserModel.getUserById(id);
    
    if (!user) {
      throw new Error('User not found');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  static async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const userAvatar = userData.avatar === "" ? 'https://www.pngitem.com/pimgs/m/137-1370051_avatar-generic-avatar-hd-png-download.png' : userData.avatar
    const userToCreate = {
      ...userData,
      password: hashedPassword,
      avatar: userAvatar
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
