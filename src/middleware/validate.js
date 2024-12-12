const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
          code: 400,
          status: 'Bad Request',
          errors: errors.array().map(error => error.msg)
        })
    }
    next();
};

module.exports = validate;
