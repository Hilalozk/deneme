const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

//api/auth/hello/..
//router.get('/hello', authController.hello)
router.post('/register', authController.register);
router.post('/signIn', authController.signIn);
router.get('/isauth', authController.isauth);



module.exports = router;