const { body } = require('express-validator');

// Utils
const constantUtils = require('../utils/constants.utils');

exports.createUserValidationRule = () => {
  return [
    body('firstName').isString().notEmpty().withMessage(constantUtils.INVALID_FIRSTNAME),
    body('lastName').isString().notEmpty().withMessage(constantUtils.INVALID_LASTNAME),
    body('email')
      .isString()
      .isEmail()
      .withMessage(constantUtils.INVALID_EMAIL)
      .notEmpty()
      .withMessage(constantUtils.EMPTY_EMAIL),
    body('password')
      .isString()
      .notEmpty()
      .matches(constantUtils.PASSWORD_REGEX)
      .withMessage(constantUtils.INVALID_PASSWORD)
      .isLength({ min: constantUtils.PASSWORD_MIN })
      .withMessage(constantUtils.PASSWORD_MIN_LENGTH),
  ];
};
