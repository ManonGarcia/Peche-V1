const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.adminSignup);
router.post('/login', userCtrl.adminLogin);

module.exports = router;