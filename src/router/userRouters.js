const express = require('express');
const validate = require('../middleware/valiadte');
const userController = require('../controller/userController');
const validateUpdateUser = require('../middleware/validation/updateUserValidation');
const validateGetUser = require('../middleware/validation/getIdUserValidation');
const validateDeleteUser = require('../middleware/validation/deleteUserValidation');
const router = express.Router();
const authorizeRole = require('../middleware/authorizeRole');

router.get('/all',authorizeRole('Admin'), userController.getAllUsers);
router.put('/:id',authorizeRole('Admin','User'),validate,validateUpdateUser, userController.updateUser);
router.get('/:id',authorizeRole('Admin','User'),validate,validateGetUser,userController.getUserById);
router.delete('/',authorizeRole('Admin'),userController.deleteAllUsers);
router.delete('/:id',authorizeRole('Admin'),validate,validateDeleteUser,userController.deleteUser);

module.exports = router;
