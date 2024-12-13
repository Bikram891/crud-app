const { body,check} = require('express-validator');

const validateCreateUser = [
    body('name').isLength({ min: 2, max: 32 }).withMessage('Name must be between 2 and 32 characters').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ];

module.exports = validateCreateUser;
