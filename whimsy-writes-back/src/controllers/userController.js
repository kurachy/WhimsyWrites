const UserService = require('../services/userService');

class UserController {
  static async signup(req, res) {
    const errors = UserService.validateSignupData(req.body);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    try {
      const { newUser, accessToken, refreshToken } = await UserService.createUser(req.body);

      res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'Strict' })
      res.status(201).json({ message: 'Signup successful', user: { newUser, accessToken } });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

}

module.exports = UserController;
