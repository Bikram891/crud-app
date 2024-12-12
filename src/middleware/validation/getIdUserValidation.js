const {param} = require('express-validator');

const validateGetUser = [
    param('id').isMongoId().withMessage('Valid user ID is required')
]
module.exports = validateGetUser;
