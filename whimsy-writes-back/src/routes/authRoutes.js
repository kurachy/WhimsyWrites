const express = require('express');
const AuthController = require('../controllers/authController');
const verifyToken = require('../../config/verifyToken'); 

const router = express.Router();

router.get('/token', AuthController.refresh);
router.post('/login', AuthController.login);

router.get('/protected', verifyToken, (req, res) => {
    // This route is now protected
    res.json({ message: 'This is a protected route. You are authorized to access this.' });
  });

module.exports = router;
