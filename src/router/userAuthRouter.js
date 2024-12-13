const loginUser = require('../controller/userAuthLoginContrller');
const validateLogin  =require('../middleware/validation/authValidation');
const validate = require('../middleware/valiadte');
const express = require('express');
const router = express.Router();

router.post('/login',validateLogin,validate,loginUser);

module.exports = router;
