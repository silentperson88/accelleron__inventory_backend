const { body } = require('express-validator');

// Utils
const constantUtils = require('../utils/constants.utils');

exports.openingBankValidator = () => [
  body('beneficiary_name')
    .isString()
    .notEmpty()
    .withMessage(constantUtils.INVALID_BENEFICIARY_NAME),
  body('beneficiary_email')
    .isString()
    .notEmpty()
    .withMessage(constantUtils.INVALID_BENEFICIARY_EMAIL),
  body('beneficiary_mobile_no')
    .isString()
    .notEmpty()
    .withMessage(constantUtils.INVALID_BENEFICIARY_MOBILE_NO),
  body('beneficiary_pan')
    .isString()
    .isLength({ min: 10, max: 10 })
    .withMessage(constantUtils.INVALID_LENGTH_BENEFICIARY_PAN),
  body('beneficiary_adhar')
    .isString()
    .isLength({ min: 12, max: 12 })
    .withMessage(constantUtils.INVALID_LENGTH_BENEFICIARY_ADHAR),
  body('bank_opening_category')
    .isString()
    .isIn(['Saving', 'Credit'])
    .withMessage(constantUtils.INVALID_BANK_OPENING_CATEGORY),
  body('bank_opening_name')
    .isString()
    .isIn([constantUtils.KOTAK, constantUtils.AU, constantUtils.INDUSIND])
    .withMessage(constantUtils.INVALID_BANK_OPENING_NAME),
];
