const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const TokenModel = require('../models/tokenModel')

require('dotenv').config();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;



class AuthService {

  static async login(email, password) {
    const user = await UserModel.getUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const accessToken = jwt.sign({ userId: user.id }, ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
    const refreshToken = await TokenModel.getRefreshTokenForUser(user.id);
    return { accessToken, refreshToken };
  }

  static async refresh(expiredAccessToken, refreshToken) {
    const refreshTokenData = await TokenModel.findRefreshToken(refreshToken);
    if (!refreshTokenData) {
      throw new Error('Invalid refresh token');
    }

    let userId;
    try {
      const decoded = jwt.verify(expiredAccessToken, ACCESS_TOKEN_SECRET, { ignoreExpiration: true });
      userId = decoded.userId;
    } catch (error) {
      throw new Error('Invalid access token');
    }

    if (refreshTokenData.userId !== userId) {
      throw new Error('Access and refresh tokens do not match');
    }

    const newAccessToken = jwt.sign({ userId: userId }, ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
    return newAccessToken;
  }

}

module.exports = AuthService;
