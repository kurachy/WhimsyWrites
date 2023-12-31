const UserService = require('../services/userService');

class UserController {
  static async signup(req, res) {
    const errors = UserService.validateSignupData(req.body);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    try {
      const signupResult = await UserService.createUser(req.body);
      res.status(201).json({ message: 'Signup successful', user: signupResult });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  }

}

module.exports = UserController;
