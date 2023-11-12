const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Signup route
router.post('/api/user/signup', userController.signup);

// Login route
router.post('/api/user/login', userController.login);

module.exports = router;
