const joi = require('joi');

/************************/
/* User Validation */
function userValidation(body) {
    const userValidationSchema = joi.object({
        username: joi.string().min(2).max(30).trim().required(),
        password: joi.string().min(6).max(20).required()
    });

    return userValidationSchema.validate(body)
};

module.exports = { userValidation } ;