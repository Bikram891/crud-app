const {param} = require('express-validator');

const validateDeleteUser = [
    param('id').isMongoId().withMessage('Valid user ID is required')
]
module.exports = validateDeleteUser;
