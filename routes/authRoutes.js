const express = require('express');
const { login, logout ,register} = require('../controllers/authController');

const router = express.Router();

router.get('/login', (req, res) => res.render('auth/login'));
router.post('/login', login);
router.get('/logout', logout);
router.get('/register', (req, res) => res.render('auth/register'));

router.post('/register', register);
module.exports = router;
