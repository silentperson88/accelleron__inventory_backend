const { body } = require('express-validator');

exports.createCodeValidationRule = () => {
  return [body('code').isString().notEmpty().withMessage('Code is required')];
};
