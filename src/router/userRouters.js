const express = require('express');
const { body, param } = require('express-validator');
const validate = require('../middleware/valiadte');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/create',validate([
    body('email').isEmail().withMessage('Invalid email format'),
    body('name')
    .isLength({ min: 2, max: 32 })
    .withMessage('Name must be between 2 and 32 characters')
    .notEmpty()
    .withMessage('Name is required'),
    body('address')
  ]),
  userController.createUser
);
router.put(
    '/:id',
    validate([
      param('id').isMongoId().withMessage('Invalid user ID'),
      body('email')
        .optional()
        .isEmail()
        .withMessage('Invalid email format'),
      body('name')
        .optional()
        .isLength({ min: 2, max: 32 })
        .withMessage('Name must be between 2 and 32 characters'),
      body('password')
        .optional()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    ]),
    userController.updateUser
  );
router.get('/all', userController.getAllUsers);
router.get('/:id',userController.getUserById);
router.delete('/',userController.deleteAllUsers);
router.delete('/:id',userController.deleteUser)

module.exports = router;
