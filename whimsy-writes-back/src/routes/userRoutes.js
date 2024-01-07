const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', UserController.signup);
router.get('/users/:id', UserController.getUserById);



module.exports = router;
