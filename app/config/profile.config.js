const constantsUtils = require('../utils/constants.utils');
const { config, screen, properties, option, buttons } = require('../utils/jsonformat.utils');

exports.ProfileForm = () => {
  const profileConfig = { ...config };

  // insert profile data
  profileConfig.username = '';
  profileConfig.id = '';
  profileConfig.supportedVersion = '';
  profileConfig.screens = {};
  profileConfig.logoUrl = '';
  profileConfig.contactId = '';

  // screens dinfo
  const profileScreens = { ...screen };
  profileScreens.title = 'Profile Form';
  profileScreens.description = 'Profile config file use for upading data on server.';
  profileScreens.type = 'form';
  profileScreens.screenId = constantsUtils.PROFILE_SCREEN_ID;
  profileScreens.color = '';
  profileScreens.iconUrl = '';
  profileScreens.properties = [];

  // create form using properties

  // First Name Field
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

  // Last Name Field
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

  // Email Field
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

  // Mobile Number Field
  const mobileNumberProperties = { ...properties };
  mobileNumberProperties.type = constantsUtils.NUMBER_TYPE;
  mobileNumberProperties.title = 'Mobile Number';
  mobileNumberProperties.IsRequired = true;
  mobileNumberProperties.default = '';
  mobileNumberProperties.hint = 'Enter Mobile Number';
  mobileNumberProperties.iconUrl = '';
  mobileNumberProperties.id = 'mobileNumber';
  mobileNumberProperties.options = [];
  mobileNumberProperties.parentFieldId = '';
  mobileNumberProperties.range = {};

  // Zip Code Field
  const zipCodeProperties = { ...properties };
  zipCodeProperties.type = constantsUtils.TEXT_TYPE;
  zipCodeProperties.title = 'Zip Code';
  zipCodeProperties.IsRequired = true;
  zipCodeProperties.default = '';
  zipCodeProperties.hint = 'Enter Zip Code';
  zipCodeProperties.iconUrl = '';
  zipCodeProperties.id = 'zipCode';
  zipCodeProperties.options = [];
  zipCodeProperties.parentFieldId = '';
  zipCodeProperties.range = {};

  // Loan Amount Field
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

  // Employment Type Field
  const employmentTypeProperties = { ...properties };
  employmentTypeProperties.type = constantsUtils.DROPDOWN_TYPE;
  employmentTypeProperties.title = 'Employment Type';
  employmentTypeProperties.IsRequired = true;
  employmentTypeProperties.default = '';
  employmentTypeProperties.hint = 'Enter Employment Type';
  employmentTypeProperties.iconUrl = '';
  employmentTypeProperties.id = 'employmentType';
  employmentTypeProperties.options = ['Salaried', 'Self Employed'].map(item => {
    const employementPropertiesOptions = { ...option };
    employementPropertiesOptions.title = item;
    employementPropertiesOptions.id = item.toLowerCase().replace(' ', '_');
    return employementPropertiesOptions;
  });
  employmentTypeProperties.parentFieldId = '';
  employmentTypeProperties.range = {};

  // Income Field
  const incomeProperties = { ...properties };
  incomeProperties.type = constantsUtils.NUMBER_TYPE;
  incomeProperties.title = 'Income';
  incomeProperties.IsRequired = true;
  incomeProperties.default = '';
  incomeProperties.hint = 'Enter Income';
  incomeProperties.iconUrl = '';
  incomeProperties.id = 'income';
  incomeProperties.options = [];
  incomeProperties.parentFieldId = '';
  incomeProperties.range = {};

  // Pan Card Number Field
  const panCardNumberProperties = { ...properties };
  panCardNumberProperties.type = constantsUtils.TEXT_TYPE;
  panCardNumberProperties.title = 'Pan Card Number';
  panCardNumberProperties.IsRequired = true;
  panCardNumberProperties.default = '';
  panCardNumberProperties.hint = 'Enter Pan Card Number';
  panCardNumberProperties.iconUrl = '';
  panCardNumberProperties.id = 'panCardNumber';
  panCardNumberProperties.options = [];
  panCardNumberProperties.parentFieldId = '';
  panCardNumberProperties.range = {};

  // Date Of Birth Field
  const dateOfBirthProperties = { ...properties };
  dateOfBirthProperties.type = constantsUtils.DATE_TYPE;
  dateOfBirthProperties.title = 'Date Of Birth';
  dateOfBirthProperties.IsRequired = true;
  dateOfBirthProperties.default = '';
  dateOfBirthProperties.hint = 'Enter Date Of Birth';
  dateOfBirthProperties.iconUrl = '';
  dateOfBirthProperties.id = 'dateOfBirth';
  dateOfBirthProperties.options = [];
  dateOfBirthProperties.parentFieldId = '';
  dateOfBirthProperties.range = {};

  // Gender Field
  const genderProperties = { ...properties };
  genderProperties.type = constantsUtils.DROPDOWN_TYPE;
  genderProperties.title = 'Gender';
  genderProperties.IsRequired = true;
  genderProperties.default = '';
  genderProperties.hint = 'Enter Gender';
  genderProperties.iconUrl = '';
  genderProperties.id = 'gender';
  genderProperties.options = ['Male', 'Female', 'Other'].map(item => {
    const genderOptions = { ...option };
    genderOptions.title = item;
    genderOptions.id = item.toLowerCase();
    return genderOptions;
  });
  genderProperties.parentFieldId = '';
  genderProperties.range = {};

  profileScreens.properties = [
    firstNameProperties,
    lastNameProperties,
    emailProperties,
    mobileNumberProperties,
    zipCodeProperties,
    loanAmountProperties,
    employmentTypeProperties,
    incomeProperties,
    panCardNumberProperties,
    dateOfBirthProperties,
    genderProperties,
  ];

  const profileButtons = { ...buttons };
  profileButtons.title = 'Submit';

  profileScreens.buttons = profileButtons;

  profileConfig.screens = profileScreens;

  return profileConfig;
};
