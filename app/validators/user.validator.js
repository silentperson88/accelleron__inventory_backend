const { body } = require('express-validator');

// Utils
const constantUtils = require('../utils/constants.utils');

exports.verifyPhoneValidationRule = () => {
  return [body('userId').isString().notEmpty().withMessage(constantUtils.INVALID_UUID)];
};

exports.createUserValidationRule = () => {
  return [
    body('firstName').isString().notEmpty().withMessage(constantUtils.INVALID_FIRSTNAME),
    body('lastName').isString().notEmpty().withMessage(constantUtils.INVALID_LASTNAME),
    body('email').isEmail().withMessage(constantUtils.INVALID_EMAIL),
    body('zipCode').isNumeric().notEmpty().withMessage(constantUtils.INVALID_ZIPCODE),
    body('loanAmount').isNumeric().notEmpty().withMessage(constantUtils.INVALID_LOAN_AMOUNT),
    body('employmentType').isString().notEmpty().withMessage(constantUtils.INVALID_EMPLOYMENT_TYPE),
    body('dateOfBirth').isString().notEmpty().withMessage(constantUtils.INVALID_DOB),
    body('gender').isString().notEmpty().withMessage(constantUtils.INVALID_GENDER),
    body('panCardNumber').isString().notEmpty().withMessage(constantUtils.INVALID_ID_PROOFS),
  ];
};

exports.createAdminUserValidationRule = () => {
  return [
    body('firstName').isString().notEmpty().withMessage(constantUtils.INVALID_FIRSTNAME),
    body('lastName').isString().notEmpty().withMessage(constantUtils.INVALID_LASTNAME),
    body('email').isEmail().withMessage(constantUtils.INVALID_EMAIL),
  ];
};
