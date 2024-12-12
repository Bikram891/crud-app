const express = require('express');
const validate = require('../middleware/valiadte');
const userController = require('../controller/userController');
const validateCreateUser = require('../middleware/validation/createUserValidation');
const validateUpdateUser = require('../middleware/validation/updateUserValidation');
const validateGetUser = require('../middleware/validation/getIdUserValidation');
const validateDeleteUser = require('../middleware/validation/deleteUserValidation');

const router = express.Router();

router.post('/create',validateCreateUser,validate,userController.createUser);
router.put('/:id',validate,validateUpdateUser, userController.updateUser);
router.get('/all', userController.getAllUsers);
router.get('/:id',validate, validateGetUser,userController.getUserById);
router.delete('/',userController.deleteAllUsers);
router.delete('/:id',validate,validateDeleteUser,userController.deleteUser);

module.exports = router;
