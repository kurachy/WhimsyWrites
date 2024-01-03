const AuthService = require('../services/authService'); 

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const { accessToken, refreshToken } = await AuthService.login(email, password);
      res.json({ accessToken, refreshToken });
    } catch (error) {
      res.status(401).send(error.message);
    }
  }

  static async refresh(req, res) {
    const { expiredAccessToken, refreshToken } = req.body;
    try {
      const newAccessToken = await AuthService.refresh(expiredAccessToken, refreshToken);
      res.json({ accessToken: newAccessToken });
    } catch (error) {
      res.status(401).send(error.message);
    }
  }

}

module.exports = AuthController;
