const joi = require('joi');
const { INTEGER } = require('sequelize');

/************************/
/* Checklist Validation */
function checklistValidation(body) {
    const checklistValidationSchema = joi.object({
        name: joi.string().min(2).max(50).trim().required()
    });

    return checklistValidationSchema.validate(body)
};

/************************/
/* Material Validation */
function materialValidation(body) {
    const materialValidationSchema = joi.object({
        name: joi.string().min(2).max(50).trim().required()
    });

    return materialValidationSchema.validate(body)
};

/************************/
/* Spot Validation */
function spotValidation(body) {
    const spotValidationSchema = joi.object({
        name: joi.string().min(2).max(50).trim().required(),
        localisation: joi.string().min(2).max(30).trim().required(),
        banner: joi.string().min(2).trim().required(),
        private: joi.boolean().required(),
        size: joi.number().type(INTEGER),
        nb_posts: joi.number().type(INTEGER),
        opening_date: joi.date(),
        closing_date: joi.date(),
        price: joi.number().type(INTEGER),
        price_duration: joi.string()
    });

    return spotValidationSchema.validate(body)
};

/************************/
/* Fish Validation */
function fishValidation(body) {
    const fishValidationSchema = joi.object({
        name: joi.string().min(2).max(20).trim().required()
    });

    return fishValidationSchema.validate(body)
};

/************************/
/* Rule Validation */
function ruleValidation(body) {
    const ruleValidationSchema = joi.object({
        content: joi.string()
    });

    return ruleValidationSchema.validate(body)
};

module.exports = { checklistValidation, materialValidation, spotValidation, fishValidation, ruleValidation };