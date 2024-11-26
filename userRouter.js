const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.patch('/:id',userController.patchUpdateUser);
router.delete('/:id', userController.deleteUser);
router.delete('/', userController.deleteAllUser);


module.exports = router;