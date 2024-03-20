const { body } = require('express-validator');

// Utils
const constantUtils = require('../utils/constants.utils');

exports.createPalletValidationRule = () => {
  return [
    body('rack').isString().notEmpty().withMessage(constantUtils.INVALID_RACK),
    body('rowIndex').isNumeric().notEmpty().withMessage(constantUtils.INVALID_ROW),
    body('columnIndex').isNumeric().notEmpty().withMessage(constantUtils.INVALID_COLUMN),
  ];
};