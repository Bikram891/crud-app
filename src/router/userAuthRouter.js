const loginUser = require('../controller/userAuthLoginContrller');
const validateLogin  =require('../middleware/validation/authValidation');
const validate = require('../middleware/valiadte');
const validateCreateUser = require('../middleware/validation/createUserValidation');
const { createUser } = require('../controller/userController');
const express = require('express');
const router = express.Router();



router.post('/login', validateLogin, validate, loginUser);
router.post('/create', validateCreateUser, validate, createUser);


module.exports = router;
