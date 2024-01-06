const AuthService = require('../services/authService');

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const { accessToken, refreshToken } = await AuthService.login(email, password);

      res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'Strict' });
      res.json({ accessToken });
    } catch (error) {
      res.status(401).send(error.message);
    }
  }

  static async logout(req, res) {
    try {
      res.cookie('refreshToken', '', { expires: new Date(0), sameSite: 'Strict' });
      res.status(200).send('Logged out');

    } catch (error) {
      res.status(401).send(error.message);
    }
  }

  static async refresh(req, res) {
    const { expiredAccessToken } = req.body;
    const refreshToken = req.cookies.refreshToken;

    try {
      const newAccessToken = await AuthService.refresh(expiredAccessToken, refreshToken);
      res.json({ accessToken: newAccessToken });
    } catch (error) {
      res.status(401).send(error.message);
    }

  }
}

module.exports = AuthController;
