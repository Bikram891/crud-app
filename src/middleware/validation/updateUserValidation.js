const { body,param} = require('express-validator');

const validateUpdateUser = [
    param('id').isMongoId().withMessage('Invalid user ID'), body('email') .optional().isEmail().withMessage('Invalid email format'),body('name')
    .optional()
    .isLength({ min: 2, max: 32 }).withMessage('Name must be between 2 and 32 characters'),
  body('address')
  ];

module.exports = validateUpdateUser;
