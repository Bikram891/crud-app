const { check } = require('express-validator');

const validateLogin = [
  check('email')
    .trim()
    .isEmail()
    .withMessage('email is required'),
  check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];


module.exports = validateLogin ;
