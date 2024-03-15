const { body } = require('express-validator');

// Utils
const constantUtils = require('../utils/constants.utils');

exports.fetchBillValidator = () => [
  body('operator').isNumeric().notEmpty().withMessage(constantUtils.INVALID_OPERATOR),
  body('canumber').isString().notEmpty().withMessage(constantUtils.INVALID_CA_NUMBER),
];

exports.payBillValidator = () => [
  body('operator').isNumeric().notEmpty().withMessage(constantUtils.INVALID_OPERATOR),
  body('canumber').isString().notEmpty().withMessage(constantUtils.INVALID_CA_NUMBER),
  body('amount').isNumeric().notEmpty().withMessage(constantUtils.INVALID_AMOUNT),
  body('latitude').isString().notEmpty().withMessage(constantUtils.INVALID_LATITUDE),
  body('longitude').isString().notEmpty().withMessage(constantUtils.INVALID_LONGITUDE),
  body('bill_fetch').isObject().notEmpty().withMessage(constantUtils.INVALID_BILL_FETCH),
];
