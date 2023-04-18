const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/login');


router.post('/login', userCtrl.userLogin);


module.exports = router;