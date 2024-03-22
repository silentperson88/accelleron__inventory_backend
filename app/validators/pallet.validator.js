const { body } = require('express-validator');

// Utils
const constantUtils = require('../utils/constants.utils');

exports.createRackValidationRule = () => [
  body('rack').isString().notEmpty().withMessage(constantUtils.INVALID_RACK),
  body('palletRow').isNumeric().notEmpty().withMessage(constantUtils.INVALID_ROW),
  body('palletColumn').isNumeric().notEmpty().withMessage(constantUtils.INVALID_COLUMN),
];

exports.createPalletValidationRule = () => {
  return [
    body('rack').isString().notEmpty().withMessage(constantUtils.INVALID_RACK),
    body('rowIndex').isNumeric().notEmpty().withMessage(constantUtils.INVALID_ROW),
    body('columnIndex').isNumeric().notEmpty().withMessage(constantUtils.INVALID_COLUMN),
  ];
};

exports.updatePalletValidationRule = () => {
  return [body('isActive').isBoolean().notEmpty().withMessage(constantUtils.INVALID_IS_ACTIVE)];
};
