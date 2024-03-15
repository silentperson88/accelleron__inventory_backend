const { body } = require('express-validator');
const constantUtils = require('../utils/constants.utils');

exports.homeLoanFormValidationRule = () => [
  body('firstName').isString().notEmpty().withMessage(constantUtils.INVALID_FIRSTNAME),
  body('lastName').isString().notEmpty().withMessage(constantUtils.INVALID_LASTNAME),
  body('email').isEmail().withMessage(constantUtils.INVALID_EMAIL),
  body('pinCode').isString().notEmpty().withMessage(constantUtils.INVALID_ZIPCODE),
  body('loanType').isString().notEmpty().withMessage(constantUtils.INVALID_LOAN_TYPE),
  body('currentEmi').isBoolean().notEmpty().withMessage(constantUtils.INVALID_CURRENT_EMI),
  body('mobileNumber')
    .isNumeric()
    .notEmpty()
    .withMessage(constantUtils.INVALID_MOBILE_NUMBER)
    .custom(value => {
      if (value.length !== 10) {
        throw new Error(constantUtils.PHONE_NUMBER_INVALID_LENGTH);
      }
      return true;
    }),
  body('loanAmount').isNumeric().notEmpty().withMessage(constantUtils.INVALID_LOAN_AMOUNT),
  body('dateOfBirth').isDate().notEmpty().withMessage(constantUtils.INVALID_DOB),
  body('termsAndConditions')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_TERMS_AND_CONDITIONS),
];

exports.businessLoanFormValidationRule = () => [
  body('firstName').isString().notEmpty().withMessage(constantUtils.INVALID_FIRSTNAME),
  body('lastName').isString().notEmpty().withMessage(constantUtils.INVALID_LASTNAME),
  body('email').isEmail().withMessage(constantUtils.INVALID_EMAIL),
  body('mobileNumber').isNumeric().notEmpty().withMessage(constantUtils.INVALID_MOBILE_NUMBER),
  body('panCardNumber').isString().notEmpty().withMessage(constantUtils.INVALID_PAN_CARD),
  body('pinCode').isString().notEmpty().withMessage(constantUtils.INVALID_PIN_CODE),
  body('loanAmount').isNumeric().notEmpty().withMessage(constantUtils.INVALID_LOAN_AMOUNT),
  body('employmentType').isString().notEmpty().withMessage(constantUtils.INVALID_EMPLOYMENT_TYPE),
  body('lookingForCurrentLoanOutstandingTransfer')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_LOAN_TYPE),
  body('confirmIfYouAreIndianNational')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_CURRENT_EMI),
  body('termsAndConditions')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_TERMS_AND_CONDITIONS),
];

exports.personalLoanFormValidationRule = () => [
  body('firstName').isString().notEmpty().withMessage(constantUtils.INVALID_FIRSTNAME),
  body('lastName').isString().notEmpty().withMessage(constantUtils.INVALID_LASTNAME),
  body('email').isEmail().withMessage(constantUtils.INVALID_EMAIL),
  body('mobileNumber').isNumeric().notEmpty().withMessage(constantUtils.INVALID_MOBILE_NUMBER),
  body('panCardNumber').isString().notEmpty().withMessage(constantUtils.INVALID_PAN_CARD),
  body('pinCode').isString().notEmpty().withMessage(constantUtils.INVALID_PIN_CODE),
  body('loanAmount').isNumeric().notEmpty().withMessage(constantUtils.INVALID_LOAN_AMOUNT),
  body('employmentType')
    .isString()
    .notEmpty()
    .isIn(['salaried', 'self_employed'])
    .withMessage(constantUtils.INVALID_EMPLOYMENT_TYPE),
  body('lookingForCurrentLoanOutstandingTransfer')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_LOAN_TYPE),
  body('confirmIfYouAreIndianNational')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_CURRENT_EMI),
  body('termsAndConditions')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.PLEASE_ACCEPT_TERMS_AND_CONDITIONS),
];

exports.carLoanFormValidationRule = () => [
  body('firstName').isString().notEmpty().withMessage(constantUtils.INVALID_FIRSTNAME),
  body('lastName').isString().notEmpty().withMessage(constantUtils.INVALID_LASTNAME),
  body('mobileNumber').isNumeric().notEmpty().withMessage(constantUtils.INVALID_MOBILE_NUMBER),
  body('email').isEmail().withMessage(constantUtils.INVALID_EMAIL),
  body('panCardNumber').isString().notEmpty().withMessage(constantUtils.INVALID_PAN_CARD),
  body('pinCode').isString().notEmpty().withMessage(constantUtils.INVALID_PIN_CODE),
  body('loanAmount').isNumeric().notEmpty().withMessage(constantUtils.INVALID_LOAN_AMOUNT),
  body('employmentType').isString().notEmpty().withMessage(constantUtils.INVALID_EMPLOYMENT_TYPE),
  body('lookingForCurrentLoanOutstandingTransfer')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_DOB),
  body('confirmIfYouAreIndianNational')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_CURRENT_EMI),
  body('termsAndConditions')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_TERMS_AND_CONDITIONS),
];

exports.creditCardFormValidationRule = () => [
  body('firstName').isString().notEmpty().withMessage(constantUtils.INVALID_FIRSTNAME),
  body('lastName').isString().notEmpty().withMessage(constantUtils.INVALID_LASTNAME),
  body('mobileNumber')
    .isNumeric()
    .notEmpty()
    .withMessage(constantUtils.INVALID_MOBILE_NUMBER)
    .custom(value => {
      if (value.length !== 10) {
        throw new Error(constantUtils.INVALID_MOBILE_NUMBER);
      }
      return true;
    }),
  body('email').isEmail().withMessage(constantUtils.INVALID_EMAIL),
  body('pinCode').isString().notEmpty().withMessage(constantUtils.INVALID_PIN_CODE),
  body('employmentType').isString().notEmpty().withMessage(constantUtils.INVALID_EMPLOYMENT_TYPE),
  body('haveAnycreditCard')
    .isString()
    .notEmpty()
    .withMessage(constantUtils.INVALID_EMPLOYMENT_TYPE),
  body('confirmIfYouAreIndianNational')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_CURRENT_EMI),
  body('termsAndConditions')
    .isBoolean()
    .notEmpty()
    .withMessage(constantUtils.INVALID_TERMS_AND_CONDITIONS),
];
