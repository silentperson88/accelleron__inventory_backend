const constantsUtils = require('../utils/constants.utils');
const { properties } = require('../utils/jsonformat.utils');

exports.firstNameField = () => {
  const firstNameProperties = { ...properties };
  firstNameProperties.type = constantsUtils.TEXT_TYPE;
  firstNameProperties.title = 'First Name';
  firstNameProperties.IsRequired = true;
  firstNameProperties.default = '';
  firstNameProperties.hint = 'Enter First Name';
  firstNameProperties.iconUrl = '';
  firstNameProperties.id = 'firstName';
  firstNameProperties.options = [];
  firstNameProperties.parentFieldId = '';
  firstNameProperties.range = {};

  return firstNameProperties;
};

exports.lastNameField = () => {
  const lastNameProperties = { ...properties };
  lastNameProperties.type = constantsUtils.TEXT_TYPE;
  lastNameProperties.title = 'Last Name';
  lastNameProperties.IsRequired = true;
  lastNameProperties.default = '';
  lastNameProperties.hint = 'Enter Last Name';
  lastNameProperties.iconUrl = '';
  lastNameProperties.id = 'lastName';
  lastNameProperties.options = [];
  lastNameProperties.parentFieldId = '';
  lastNameProperties.range = {};

  return lastNameProperties;
};

exports.emailField = () => {
  const emailProperties = { ...properties };
  emailProperties.type = constantsUtils.EMAIL_TYPE;
  emailProperties.title = 'Email';
  emailProperties.IsRequired = true;
  emailProperties.default = '';
  emailProperties.hint = 'Enter Email';
  emailProperties.iconUrl = '';
  emailProperties.id = 'email';
  emailProperties.options = [];
  emailProperties.parentFieldId = '';
  emailProperties.range = {};

  return emailProperties;
};

exports.mobileNumberField = () => {
  const mobileNumberProperties = { ...properties };
  mobileNumberProperties.type = constantsUtils.MOBILE_FIELD_TYPE;
  mobileNumberProperties.title = 'Mobile Number';
  mobileNumberProperties.IsRequired = true;
  mobileNumberProperties.default = '';
  mobileNumberProperties.hint = 'Enter Mobile Number';
  mobileNumberProperties.iconUrl = '';
  mobileNumberProperties.id = 'mobileNumber';
  mobileNumberProperties.options = [];
  mobileNumberProperties.parentFieldId = '';
  mobileNumberProperties.range = {};

  return mobileNumberProperties;
};

exports.dataOfBirthField = () => {
  const dataOfBirthProperties = { ...properties };
  dataOfBirthProperties.type = constantsUtils.DATE_TYPE;
  dataOfBirthProperties.title = 'Date Of Birth';
  dataOfBirthProperties.IsRequired = true;
  dataOfBirthProperties.default = '';
  dataOfBirthProperties.hint = 'Enter Date Of Birth';
  dataOfBirthProperties.iconUrl = '';
  dataOfBirthProperties.id = 'dateOfBirth';
  dataOfBirthProperties.options = [];
  dataOfBirthProperties.parentFieldId = '';
  dataOfBirthProperties.range = {};

  return dataOfBirthProperties;
};

exports.pinCodeField = () => {
  const pinCodeProperties = { ...properties };
  pinCodeProperties.type = constantsUtils.TEXT_TYPE;
  pinCodeProperties.title = 'Pin Code';
  pinCodeProperties.IsRequired = true;
  pinCodeProperties.default = '';
  pinCodeProperties.hint = 'Pincode of Current Residence';
  pinCodeProperties.iconUrl = '';
  pinCodeProperties.id = 'pinCode';
  pinCodeProperties.options = [];
  pinCodeProperties.parentFieldId = '';
  pinCodeProperties.range = {};

  return pinCodeProperties;
};

exports.addressField = () => {
  const addressProperties = { ...properties };
  addressProperties.type = constantsUtils.TEXT_TYPE;
  addressProperties.title = 'Address';
  addressProperties.IsRequired = true;
  addressProperties.default = '';
  addressProperties.hint = 'Enter Address';
  addressProperties.iconUrl = '';
  addressProperties.id = 'address';
  addressProperties.options = [];
  addressProperties.parentFieldId = '';
  addressProperties.range = {};

  return addressProperties;
};

exports.cityField = () => {
  const cityProperties = { ...properties };
  cityProperties.type = constantsUtils.TEXT_TYPE;
  cityProperties.title = 'City';
  cityProperties.IsRequired = true;
  cityProperties.default = '';
  cityProperties.hint = 'Enter City';
  cityProperties.iconUrl = '';
  cityProperties.id = 'city';
  cityProperties.options = [];
  cityProperties.parentFieldId = '';
  cityProperties.range = {};

  return cityProperties;
};

exports.stateField = () => {
  const stateProperties = { ...properties };
  stateProperties.type = constantsUtils.TEXT_TYPE;
  stateProperties.title = 'State';
  stateProperties.IsRequired = true;
  stateProperties.default = '';
  stateProperties.hint = 'Enter State';
  stateProperties.iconUrl = '';
  stateProperties.id = 'state';
  stateProperties.options = [];
  stateProperties.parentFieldId = '';
  stateProperties.range = {};

  return stateProperties;
};

exports.countryField = () => {
  const countryProperties = { ...properties };
  countryProperties.type = constantsUtils.TEXT_TYPE;
  countryProperties.title = 'Country';
  countryProperties.IsRequired = true;
  countryProperties.default = '';
  countryProperties.hint = 'Enter Country';
  countryProperties.iconUrl = '';
  countryProperties.id = 'country';
  countryProperties.options = [];
  countryProperties.parentFieldId = '';
  countryProperties.range = {};

  return countryProperties;
};

exports.loanAmountField = () => {
  const loanAmountProperties = { ...properties };
  loanAmountProperties.type = constantsUtils.NUMBER_TYPE;
  loanAmountProperties.title = 'Loan Amount';
  loanAmountProperties.IsRequired = true;
  loanAmountProperties.default = '';
  loanAmountProperties.hint = 'Enter Loan Amount';
  loanAmountProperties.iconUrl = '';
  loanAmountProperties.id = 'loanAmount';
  loanAmountProperties.options = [];
  loanAmountProperties.parentFieldId = '';
  loanAmountProperties.range = {};

  return loanAmountProperties;
};
