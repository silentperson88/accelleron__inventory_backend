const constantsUtils = require('../utils/constants.utils');
const { screen, properties, option, buttons } = require('../utils/jsonformat.utils');
const {
  firstNameField,
  lastNameField,
  emailField,
  mobileNumberField,
  pinCodeField,
  loanAmountField,
  dataOfBirthField,
} = require('../config/commonFields.config');

const homeLoanScreen = () => {
  // screens dinfo
  const homeLoanScreens = { ...screen };
  homeLoanScreens.title = 'Home Loan Form';
  homeLoanScreens.description = 'Home Loan config file use for upading data on server.';
  homeLoanScreens.type = 'form';
  homeLoanScreens.configType = 'home';
  homeLoanScreens.screenId = constantsUtils.HOME_LOAN_SCREEN_ID;
  homeLoanScreens.color = '';
  homeLoanScreens.iconUrl = '';
  homeLoanScreens.properties = [];

  // form properties

  // Loan Type Field
  const loanTypeProperties = { ...properties };
  loanTypeProperties.type = constantsUtils.DROPDOWN_TYPE;
  loanTypeProperties.title = 'Loan Type';
  loanTypeProperties.IsRequired = true;
  loanTypeProperties.default = '';
  loanTypeProperties.hint = 'Select Loan Type';
  loanTypeProperties.iconUrl = '';
  loanTypeProperties.id = 'loanType';
  loanTypeProperties.options = [
    {
      id: 'newHomeLoan',
      title: 'New Home Loan',
    },
    {
      id: 'homeLoanBalanceTransfer',
      title: 'Home Loan Balance Transfer',
    },
    {
      id: 'homeLoanTopUp',
      title: 'Loan Against Property',
    },
    {
      id: 'homeLoanTopUpBalanceTransfer',
      title: 'Loan Against Property Balance Transfer',
    },
  ];

  const firstNameProperties = firstNameField();
  const lastNameProperties = lastNameField();
  const mobileNumberProperties = mobileNumberField();
  const emailProperties = emailField();
  const dataOfBirthProperties = dataOfBirthField();
  const pinCodeProperties = pinCodeField();

  // Resisdence of india
  const residenceOfIndiaProperties = { ...properties };
  residenceOfIndiaProperties.type = constantsUtils.BOOLEAN_TYPE;
  residenceOfIndiaProperties.title = 'Are you resident of India/NRI';
  residenceOfIndiaProperties.IsRequired = true;
  residenceOfIndiaProperties.default = '';
  residenceOfIndiaProperties.hint = '';
  residenceOfIndiaProperties.iconUrl = '';
  residenceOfIndiaProperties.id = 'residenceStatus';
  residenceOfIndiaProperties.options = ['yes', 'no'].map(item => {
    const temp = { ...option };
    temp.title = item.toUpperCase();
    temp.id = item;
    return temp;
  });
  const loanAmountProperties = loanAmountField();

  //Any Current Emi ?
  const currentEmiProperties = { ...properties };
  currentEmiProperties.type = constantsUtils.BOOLEAN_TYPE;
  currentEmiProperties.title = 'Any Current Emi ?';
  currentEmiProperties.IsRequired = true;
  currentEmiProperties.default = '';
  currentEmiProperties.hint = '';
  currentEmiProperties.iconUrl = '';
  currentEmiProperties.id = 'currentEmi';
  currentEmiProperties.options = ['yes', 'no'].map(item => {
    const temp = { ...option };
    temp.title = item.toUpperCase();
    temp.id = item;
    return temp;
  });

  // Total Amount of Emi
  const totalAmountOfEmiProperties = { ...properties };
  totalAmountOfEmiProperties.type = constantsUtils.NUMBER_TYPE;
  totalAmountOfEmiProperties.title = 'Total Amount of Emi';
  totalAmountOfEmiProperties.IsRequired = false;
  totalAmountOfEmiProperties.default = '';
  totalAmountOfEmiProperties.hint = 'Enter Total Amount of Emi';
  totalAmountOfEmiProperties.iconUrl = '';
  totalAmountOfEmiProperties.id = 'totalAmountOfEmi';
  totalAmountOfEmiProperties.options = [];
  totalAmountOfEmiProperties.parentFieldId = 'currentEmi';

  // terms and conditions
  const termsAndConditionsProperties = { ...properties };
  termsAndConditionsProperties.type = constantsUtils.TERMS_AND_CONDITIONS;
  termsAndConditionsProperties.title = constantsUtils.LOAN_TERMS_AND_CONDITIONS;
  termsAndConditionsProperties.IsRequired = true;
  termsAndConditionsProperties.default = '';
  termsAndConditionsProperties.hint = '';
  termsAndConditionsProperties.iconUrl = '';
  termsAndConditionsProperties.id = 'termsAndConditions';
  termsAndConditionsProperties.options = [];
  termsAndConditionsProperties.parentFieldId = '';

  // buttons
  const homeLoanButtons = { ...buttons };
  homeLoanButtons.title = 'Submit';

  homeLoanScreens.properties = [
    loanTypeProperties,
    firstNameProperties,
    lastNameProperties,
    mobileNumberProperties,
    emailProperties,
    dataOfBirthProperties,
    pinCodeProperties,
    residenceOfIndiaProperties,
    loanAmountProperties,
    currentEmiProperties,
    totalAmountOfEmiProperties,
    termsAndConditionsProperties,
  ];

  homeLoanScreens.buttons = [homeLoanButtons];

  return homeLoanScreens;
};

const personaLoanScreen = type => {
  // screens dinfo
  const personalLoanScreens = { ...screen };
  personalLoanScreens.title = type === 'personal' ? 'Personal Loan Form' : 'Business Loan Form';
  personalLoanScreens.description = `${type} Loan config file use for upading data on server.`;
  personalLoanScreens.type = 'form';
  personalLoanScreens.configType = type;
  personalLoanScreens.screenId =
    type === 'personal'
      ? constantsUtils.PERSONAL_LOAN_SCREEN_ID
      : constantsUtils.BUSINESS_LOAN_SCREEN_ID;
  personalLoanScreens.color = '';
  personalLoanScreens.iconUrl = '';
  personalLoanScreens.properties = [];

  // form properties
  const firstNameProperties = firstNameField();
  const lastNameProperties = lastNameField();
  const mobileNumberProperties = mobileNumberField();
  const emailProperties = emailField();

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

  const pinCodeProperties = pinCodeField();

  const loanAmountProperties = loanAmountField();

  // Employment Type Field
  const employmentTypeProperties = { ...properties };
  employmentTypeProperties.type = constantsUtils.DROPDOWN_TYPE;
  employmentTypeProperties.title = 'Employment Type';
  employmentTypeProperties.IsRequired = true;
  employmentTypeProperties.default = '';
  employmentTypeProperties.hint = 'Enter Employment Type';
  employmentTypeProperties.iconUrl = '';
  employmentTypeProperties.id = 'employmentType';
  employmentTypeProperties.hasChildField = true;
  employmentTypeProperties.options = [
    {
      id: 'salaried',
      title: 'Salaried',
      dependentFieldIds: ['netMonthlySalaryCredit', 'salaryBankAccountBankName'],
    },
    {
      id: 'self_employed',
      title: 'Self Employed',
      dependentFieldIds: ['annualIncomeAsPerItr', 'primaryBankAccountBankName'],
    },
  ];
  employmentTypeProperties.parentFieldId = '';
  employmentTypeProperties.range = {};

  // Net Monthly Salary Credit
  const netMonthlySalaryCreditProperties = { ...properties };
  netMonthlySalaryCreditProperties.type = constantsUtils.NUMBER_TYPE;
  netMonthlySalaryCreditProperties.title = 'Net Monthly Salary Credit';
  netMonthlySalaryCreditProperties.IsRequired = false;
  netMonthlySalaryCreditProperties.default = '';
  netMonthlySalaryCreditProperties.hint = 'Enter Net Monthly Salary Credit';
  netMonthlySalaryCreditProperties.iconUrl = '';
  netMonthlySalaryCreditProperties.id = 'netMonthlySalaryCredit';
  netMonthlySalaryCreditProperties.options = [];
  netMonthlySalaryCreditProperties.parentFieldId = 'employmentType';
  netMonthlySalaryCreditProperties.isDefaultVisible = false;

  // Salary Bank Account Bank
  const salaryBankAccountBankProperties = { ...properties };
  salaryBankAccountBankProperties.type = constantsUtils.TEXT_TYPE;
  salaryBankAccountBankProperties.title = 'Salary Bank Account Bank';
  salaryBankAccountBankProperties.IsRequired = false;
  salaryBankAccountBankProperties.default = '';
  salaryBankAccountBankProperties.hint = 'Enter Salary Bank Account Bank';
  salaryBankAccountBankProperties.iconUrl = '';
  salaryBankAccountBankProperties.id = 'salaryBankAccountBankName';
  salaryBankAccountBankProperties.options = [];
  salaryBankAccountBankProperties.parentFieldId = 'employmentType';
  salaryBankAccountBankProperties.isDefaultVisible = false;

  // Annual Income As per ITR
  const annualIncomeAsPerItrProperties = { ...properties };
  annualIncomeAsPerItrProperties.type = constantsUtils.NUMBER_TYPE;
  annualIncomeAsPerItrProperties.title = 'Annual Income As per ITR';
  annualIncomeAsPerItrProperties.IsRequired = false;
  annualIncomeAsPerItrProperties.default = '';
  annualIncomeAsPerItrProperties.hint = 'Enter Annual Income As per ITR';
  annualIncomeAsPerItrProperties.iconUrl = '';
  annualIncomeAsPerItrProperties.id = 'annualIncomeAsPerItr';
  annualIncomeAsPerItrProperties.options = [];
  annualIncomeAsPerItrProperties.parentFieldId = 'employmentType';
  annualIncomeAsPerItrProperties.isDefaultVisible = false;

  // Primary Bank Account Bank
  const primaryBankAccountBankProperties = { ...properties };
  primaryBankAccountBankProperties.type = constantsUtils.TEXT_TYPE;
  primaryBankAccountBankProperties.title = 'Primary Bank Account Bank';
  primaryBankAccountBankProperties.IsRequired = false;
  primaryBankAccountBankProperties.default = '';
  primaryBankAccountBankProperties.hint = 'Enter Primary Bank Account Bank';
  primaryBankAccountBankProperties.iconUrl = '';
  primaryBankAccountBankProperties.id = 'primaryBankAccountBankName';
  primaryBankAccountBankProperties.options = [];
  primaryBankAccountBankProperties.parentFieldId = 'employmentType';
  primaryBankAccountBankProperties.isDefaultVisible = false;

  //   Looking for Current Loan Outstanding Transfer
  const lookingForCurrentLoanOutstandingTransferProperties = { ...properties };
  lookingForCurrentLoanOutstandingTransferProperties.type = constantsUtils.BOOLEAN_TYPE;
  lookingForCurrentLoanOutstandingTransferProperties.title =
    'Looking for Current Loan Outstanding Transfer';
  lookingForCurrentLoanOutstandingTransferProperties.IsRequired = true;
  lookingForCurrentLoanOutstandingTransferProperties.default = '';
  lookingForCurrentLoanOutstandingTransferProperties.hint = '';
  lookingForCurrentLoanOutstandingTransferProperties.iconUrl = '';
  lookingForCurrentLoanOutstandingTransferProperties.id =
    'lookingForCurrentLoanOutstandingTransfer';
  lookingForCurrentLoanOutstandingTransferProperties.options = ['yes', 'no'].map(item => {
    const temp = { ...option };
    temp.title = item.toUpperCase();
    temp.id = item;
    return temp;
  });

  //   Confirm if you are Indian National
  const confirmIfYouAreIndianNationalProperties = { ...properties };
  confirmIfYouAreIndianNationalProperties.type = constantsUtils.BOOLEAN_TYPE;
  confirmIfYouAreIndianNationalProperties.title = 'Confirm if you are Indian National';
  confirmIfYouAreIndianNationalProperties.IsRequired = true;
  confirmIfYouAreIndianNationalProperties.default = '';
  confirmIfYouAreIndianNationalProperties.hint = '';
  confirmIfYouAreIndianNationalProperties.iconUrl = '';
  confirmIfYouAreIndianNationalProperties.id = 'confirmIfYouAreIndianNational';
  confirmIfYouAreIndianNationalProperties.options = ['yes', 'no'].map(item => {
    const temp = { ...option };
    temp.title = item.toUpperCase();
    temp.id = item;
    return temp;
  });

  // terms and conditions
  const termsAndConditionsProperties = { ...properties };
  termsAndConditionsProperties.type = constantsUtils.TERMS_AND_CONDITIONS;
  termsAndConditionsProperties.title = constantsUtils.LOAN_TERMS_AND_CONDITIONS;
  termsAndConditionsProperties.IsRequired = true;
  termsAndConditionsProperties.default = '';
  termsAndConditionsProperties.hint = '';
  termsAndConditionsProperties.iconUrl = '';
  termsAndConditionsProperties.id = 'termsAndConditions';
  termsAndConditionsProperties.options = [];
  termsAndConditionsProperties.parentFieldId = '';

  // buttons
  const personalLoanButtons = { ...buttons };
  personalLoanButtons.title = 'Submit';

  personalLoanScreens.properties = [
    firstNameProperties,
    lastNameProperties,
    mobileNumberProperties,
    emailProperties,
    panCardNumberProperties,
    pinCodeProperties,
    loanAmountProperties,
    employmentTypeProperties,
    netMonthlySalaryCreditProperties,
    salaryBankAccountBankProperties,
    annualIncomeAsPerItrProperties,
    primaryBankAccountBankProperties,
    lookingForCurrentLoanOutstandingTransferProperties,
    confirmIfYouAreIndianNationalProperties,
    termsAndConditionsProperties,
  ];
  personalLoanScreens.buttons = [personalLoanButtons];

  return personalLoanScreens;
};

const carLoanScreen = () => {
  // screens dinfo
  const carLoanScreens = { ...screen };
  carLoanScreens.title = 'Car Loan Form';
  carLoanScreens.description = 'Car Loan config file use for upading data on server.';
  carLoanScreens.type = 'form';
  carLoanScreens.configType = 'car';
  carLoanScreens.screenId = constantsUtils.CAR_LOAN_SCREEN_ID;
  carLoanScreens.color = '';
  carLoanScreens.iconUrl = '';
  carLoanScreens.properties = [];

  // form properties

  //   New Car Loan / Used Car Loan
  const newCarLoanProperties = { ...properties };
  newCarLoanProperties.type = constantsUtils.DROPDOWN_TYPE;
  newCarLoanProperties.title = 'New Car Loan / Used Car Loan';
  newCarLoanProperties.IsRequired = true;
  newCarLoanProperties.default = '';
  newCarLoanProperties.hint = 'Select New Car Loan / Used Car Loan';
  newCarLoanProperties.iconUrl = '';
  newCarLoanProperties.id = 'newCarLoan';
  newCarLoanProperties.options = [
    {
      id: 'newCarLoan',
      title: 'New Car Loan',
    },
    {
      id: 'usedCarLoan',
      title: 'Used Car Loan',
    },
  ];

  const firstNameProperties = firstNameField();
  const lastNameProperties = lastNameField();
  const mobileNumberProperties = mobileNumberField();
  const emailProperties = emailField();

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

  const pinCodeProperties = pinCodeField();

  // Maker of Car
  const makerOfCarProperties = { ...properties };
  makerOfCarProperties.type = constantsUtils.TEXT_TYPE;
  makerOfCarProperties.title = 'Make';
  makerOfCarProperties.IsRequired = true;
  makerOfCarProperties.default = '';
  makerOfCarProperties.hint = 'Enter Make';
  makerOfCarProperties.iconUrl = '';
  makerOfCarProperties.id = 'makerOfCar';
  makerOfCarProperties.options = [];
  makerOfCarProperties.parentFieldId = '';

  // Model
  const modelProperties = { ...properties };
  modelProperties.type = constantsUtils.TEXT_TYPE;
  modelProperties.title = 'Model';
  modelProperties.IsRequired = true;
  modelProperties.default = '';
  modelProperties.hint = 'Enter Model';
  modelProperties.iconUrl = '';
  modelProperties.id = 'model';
  modelProperties.options = [];
  modelProperties.parentFieldId = '';

  // On Road Price
  const onRoadPriceProperties = { ...properties };
  onRoadPriceProperties.type = constantsUtils.NUMBER_TYPE;
  onRoadPriceProperties.title = 'On Road Price';
  onRoadPriceProperties.IsRequired = true;
  onRoadPriceProperties.default = '';
  onRoadPriceProperties.hint = 'Enter On Road Price';
  onRoadPriceProperties.iconUrl = '';
  onRoadPriceProperties.id = 'onRoadPrice';
  onRoadPriceProperties.options = [];
  onRoadPriceProperties.parentFieldId = '';

  const loanAmountProperties = loanAmountField();

  // Employment Type Field
  const employmentTypeProperties = { ...properties };
  employmentTypeProperties.type = constantsUtils.DROPDOWN_TYPE;
  employmentTypeProperties.title = 'Employment Type';
  employmentTypeProperties.IsRequired = true;
  employmentTypeProperties.default = '';
  employmentTypeProperties.hint = 'Enter Employment Type';
  employmentTypeProperties.iconUrl = '';
  employmentTypeProperties.id = 'employmentType';
  employmentTypeProperties.hasChildField = true;
  employmentTypeProperties.options = [
    {
      id: 'salaried',
      title: 'Salaried',
      dependentFieldIds: ['netMonthlySalaryCredit', 'salaryBankAccountBankName'],
    },
    {
      id: 'self_employed',
      title: 'Self Employed',
      dependentFieldIds: ['annualIncomeAsPerItr', 'primaryBankAccountBankName'],
    },
  ];
  employmentTypeProperties.parentFieldId = '';
  employmentTypeProperties.range = {};

  // Net Monthly Salary Credit
  const netMonthlySalaryCreditProperties = { ...properties };
  netMonthlySalaryCreditProperties.type = constantsUtils.NUMBER_TYPE;
  netMonthlySalaryCreditProperties.title = 'Net Monthly Salary Credit';
  netMonthlySalaryCreditProperties.IsRequired = false;
  netMonthlySalaryCreditProperties.default = '';
  netMonthlySalaryCreditProperties.hint = 'Enter Net Monthly Salary Credit';
  netMonthlySalaryCreditProperties.iconUrl = '';
  netMonthlySalaryCreditProperties.id = 'netMonthlySalaryCredit';
  netMonthlySalaryCreditProperties.options = [];
  netMonthlySalaryCreditProperties.parentFieldId = 'employmentType';
  netMonthlySalaryCreditProperties.isDefaultVisible = false;

  // Salary Bank Account Bank
  const salaryBankAccountBankProperties = { ...properties };
  salaryBankAccountBankProperties.type = constantsUtils.TEXT_TYPE;
  salaryBankAccountBankProperties.title = 'Salary Bank Account Bank';
  salaryBankAccountBankProperties.IsRequired = false;
  salaryBankAccountBankProperties.default = '';
  salaryBankAccountBankProperties.hint = 'Enter Salary Bank Account Bank';
  salaryBankAccountBankProperties.iconUrl = '';
  salaryBankAccountBankProperties.id = 'salaryBankAccountBankNameprimaryBankAccountBank';
  salaryBankAccountBankProperties.options = [];
  salaryBankAccountBankProperties.parentFieldId = 'employmentType';
  salaryBankAccountBankProperties.isDefaultVisible = false;

  // Annual Income As per ITR
  const annualIncomeAsPerItrProperties = { ...properties };
  annualIncomeAsPerItrProperties.type = constantsUtils.NUMBER_TYPE;
  annualIncomeAsPerItrProperties.title = 'Annual Income As per ITR';
  annualIncomeAsPerItrProperties.IsRequired = false;
  annualIncomeAsPerItrProperties.default = '';
  annualIncomeAsPerItrProperties.hint = 'Enter Annual Income As per ITR';
  annualIncomeAsPerItrProperties.iconUrl = '';
  annualIncomeAsPerItrProperties.id = 'annualIncomeAsPerItr';
  annualIncomeAsPerItrProperties.options = [];
  annualIncomeAsPerItrProperties.parentFieldId = 'employmentType';
  annualIncomeAsPerItrProperties.isDefaultVisible = false;

  // Primary Bank Account Bank
  const primaryBankAccountBankProperties = { ...properties };
  primaryBankAccountBankProperties.type = constantsUtils.TEXT_TYPE;
  primaryBankAccountBankProperties.title = 'Primary Bank Account Bank';
  primaryBankAccountBankProperties.IsRequired = false;
  primaryBankAccountBankProperties.default = '';
  primaryBankAccountBankProperties.hint = 'Enter Primary Bank Account Bank';
  primaryBankAccountBankProperties.iconUrl = '';
  primaryBankAccountBankProperties.id = 'primaryBankAccountBankName';
  primaryBankAccountBankProperties.options = [];
  primaryBankAccountBankProperties.parentFieldId = 'employmentType';
  primaryBankAccountBankProperties.isDefaultVisible = false;

  //   Looking for Current Loan Outstanding Transfer
  const lookingForCurrentLoanOutstandingTransferProperties = { ...properties };
  lookingForCurrentLoanOutstandingTransferProperties.type = constantsUtils.BOOLEAN_TYPE;
  lookingForCurrentLoanOutstandingTransferProperties.title =
    'Looking for Current Loan Outstanding Transfer';
  lookingForCurrentLoanOutstandingTransferProperties.IsRequired = true;
  lookingForCurrentLoanOutstandingTransferProperties.default = '';
  lookingForCurrentLoanOutstandingTransferProperties.hint = '';
  lookingForCurrentLoanOutstandingTransferProperties.iconUrl = '';
  lookingForCurrentLoanOutstandingTransferProperties.id =
    'lookingForCurrentLoanOutstandingTransfer';
  lookingForCurrentLoanOutstandingTransferProperties.options = ['yes', 'no'].map(item => {
    const temp = { ...option };
    temp.title = item.toUpperCase();
    temp.id = item;
    return temp;
  });

  //   Confirm if you are Indian National
  const confirmIfYouAreIndianNationalProperties = { ...properties };
  confirmIfYouAreIndianNationalProperties.type = constantsUtils.BOOLEAN_TYPE;
  confirmIfYouAreIndianNationalProperties.title = 'Confirm if you are Indian National';
  confirmIfYouAreIndianNationalProperties.IsRequired = true;
  confirmIfYouAreIndianNationalProperties.default = '';
  confirmIfYouAreIndianNationalProperties.hint = '';
  confirmIfYouAreIndianNationalProperties.iconUrl = '';
  confirmIfYouAreIndianNationalProperties.id = 'confirmIfYouAreIndianNational';
  confirmIfYouAreIndianNationalProperties.options = ['yes', 'no'].map(item => {
    const temp = { ...option };
    temp.title = item.toUpperCase();
    temp.id = item;
    return temp;
  });

  // terms and conditions
  const termsAndConditionsProperties = { ...properties };
  termsAndConditionsProperties.type = constantsUtils.TERMS_AND_CONDITIONS;
  termsAndConditionsProperties.title = constantsUtils.LOAN_TERMS_AND_CONDITIONS;
  termsAndConditionsProperties.IsRequired = true;
  termsAndConditionsProperties.default = '';
  termsAndConditionsProperties.hint = '';
  termsAndConditionsProperties.iconUrl = '';
  termsAndConditionsProperties.id = 'termsAndConditions';
  termsAndConditionsProperties.options = [];
  termsAndConditionsProperties.parentFieldId = '';

  // buttons
  const carLoanButtons = { ...buttons };
  carLoanButtons.title = 'Submit';

  carLoanScreens.properties = [
    newCarLoanProperties,
    firstNameProperties,
    lastNameProperties,
    mobileNumberProperties,
    emailProperties,
    panCardNumberProperties,
    pinCodeProperties,
    makerOfCarProperties,
    modelProperties,
    onRoadPriceProperties,
    loanAmountProperties,
    employmentTypeProperties,
    netMonthlySalaryCreditProperties,
    salaryBankAccountBankProperties,
    annualIncomeAsPerItrProperties,
    primaryBankAccountBankProperties,
    lookingForCurrentLoanOutstandingTransferProperties,
    confirmIfYouAreIndianNationalProperties,
    termsAndConditionsProperties,
  ];
  carLoanScreens.buttons = [carLoanButtons];

  return carLoanScreens;
};

const creditCardLoanScreen = () => {
  // screens dinfo
  const carLoanScreens = { ...screen };
  carLoanScreens.title = 'Credit card Loan Form';
  carLoanScreens.description = 'Credit card Loan config file use for upading data on server.';
  carLoanScreens.type = 'form';
  carLoanScreens.configType = 'credit';
  carLoanScreens.screenId = constantsUtils.CREDIT_CARD_SCREEN_ID;
  carLoanScreens.color = '';
  carLoanScreens.iconUrl = '';
  carLoanScreens.properties = [];

  // form properties

  const firstNameProperties = firstNameField();
  const lastNameProperties = lastNameField();
  const mobileNumberProperties = mobileNumberField();
  const emailProperties = emailField();

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

  const pinCodeProperties = pinCodeField();

  // Employment Type Field
  const employmentTypeProperties = { ...properties };
  employmentTypeProperties.type = constantsUtils.DROPDOWN_TYPE;
  employmentTypeProperties.title = 'Employment Type';
  employmentTypeProperties.IsRequired = true;
  employmentTypeProperties.default = '';
  employmentTypeProperties.hint = 'Enter Employment Type';
  employmentTypeProperties.iconUrl = '';
  employmentTypeProperties.id = 'employmentType';
  employmentTypeProperties.hasChildField = true;
  employmentTypeProperties.options = [
    {
      id: 'salaried',
      title: 'Salaried',
      dependentFieldIds: ['netMonthlySalaryCredit'],
    },
    {
      id: 'self_employed',
      title: 'Self Employed',
      dependentFieldIds: ['annualIncomeAsPerItr'],
    },
  ];
  employmentTypeProperties.parentFieldId = '';
  employmentTypeProperties.range = {};

  // Net Monthly Salary Credit
  const netMonthlySalaryCreditProperties = { ...properties };
  netMonthlySalaryCreditProperties.type = constantsUtils.NUMBER_TYPE;
  netMonthlySalaryCreditProperties.title = 'Net Monthly Salary Credit';
  netMonthlySalaryCreditProperties.IsRequired = false;
  netMonthlySalaryCreditProperties.default = '';
  netMonthlySalaryCreditProperties.hint = 'Enter Net Monthly Salary Credit';
  netMonthlySalaryCreditProperties.iconUrl = '';
  netMonthlySalaryCreditProperties.id = 'netMonthlySalaryCredit';
  netMonthlySalaryCreditProperties.options = [];
  netMonthlySalaryCreditProperties.parentFieldId = 'employmentType';
  netMonthlySalaryCreditProperties.isDefaultVisible = false;

  // Annual Income As per ITR
  const annualIncomeAsPerItrProperties = { ...properties };
  annualIncomeAsPerItrProperties.type = constantsUtils.NUMBER_TYPE;
  annualIncomeAsPerItrProperties.title = 'Annual Income As per ITR';
  annualIncomeAsPerItrProperties.IsRequired = false;
  annualIncomeAsPerItrProperties.default = '';
  annualIncomeAsPerItrProperties.hint = 'Enter Annual Income As per ITR';
  annualIncomeAsPerItrProperties.iconUrl = '';
  annualIncomeAsPerItrProperties.id = 'annualIncomeAsPerItr';
  annualIncomeAsPerItrProperties.options = [];
  annualIncomeAsPerItrProperties.parentFieldId = 'employmentType';
  annualIncomeAsPerItrProperties.isDefaultVisible = false;

  // Employment Type Field
  const haveAnycreditCard = { ...properties };
  haveAnycreditCard.type = constantsUtils.DROPDOWN_TYPE;
  haveAnycreditCard.title = 'Are you already have any other credit card?';
  haveAnycreditCard.IsRequired = true;
  haveAnycreditCard.default = '';
  haveAnycreditCard.hint = 'Select';
  haveAnycreditCard.iconUrl = '';
  haveAnycreditCard.id = 'haveAnycreditCard';
  haveAnycreditCard.hasChildField = true;
  haveAnycreditCard.options = [
    {
      id: 'Yes',
      title: 'Yes',
      dependentFieldIds: ['creditLimit', 'existingCreditCardBankName'],
    },
    {
      id: 'No',
      title: 'No',
      dependentFieldIds: [],
    },
  ];
  haveAnycreditCard.parentFieldId = '';
  haveAnycreditCard.range = {};

  // Net Monthly Salary Credit
  const creditLimitProperties = { ...properties };
  creditLimitProperties.type = constantsUtils.NUMBER_TYPE;
  creditLimitProperties.title = 'Credit Limit';
  creditLimitProperties.IsRequired = false;
  creditLimitProperties.default = '';
  creditLimitProperties.hint = 'Enter Credit Limit';
  creditLimitProperties.iconUrl = '';
  creditLimitProperties.id = 'creditLimit';
  creditLimitProperties.options = [];
  creditLimitProperties.parentFieldId = 'haveAnycreditCard';
  creditLimitProperties.isDefaultVisible = false;

  // Credit card Bank Name
  const creditCardBankNameProperties = { ...properties };
  creditCardBankNameProperties.type = constantsUtils.TEXT_TYPE;
  creditCardBankNameProperties.title = 'Credit card Bank';
  creditCardBankNameProperties.IsRequired = false;
  creditCardBankNameProperties.default = '';
  creditCardBankNameProperties.hint = 'Enter Credit card Bank';
  creditCardBankNameProperties.iconUrl = '';
  creditCardBankNameProperties.id = 'existingCreditCardBankName';
  creditCardBankNameProperties.options = [];
  creditCardBankNameProperties.parentFieldId = 'haveAnycreditCard';
  creditCardBankNameProperties.isDefaultVisible = false;

  //   Confirm if you are Indian National
  const confirmIfYouAreIndianNationalProperties = { ...properties };
  confirmIfYouAreIndianNationalProperties.type = constantsUtils.BOOLEAN_TYPE;
  confirmIfYouAreIndianNationalProperties.title = 'Confirm if you are Indian National';
  confirmIfYouAreIndianNationalProperties.IsRequired = true;
  confirmIfYouAreIndianNationalProperties.default = '';
  confirmIfYouAreIndianNationalProperties.hint = '';
  confirmIfYouAreIndianNationalProperties.iconUrl = '';
  confirmIfYouAreIndianNationalProperties.id = 'confirmIfYouAreIndianNational';
  confirmIfYouAreIndianNationalProperties.options = ['yes', 'no'].map(item => {
    const temp = { ...option };
    temp.title = item.toUpperCase();
    temp.id = item;
    return temp;
  });

  // terms and conditions
  const termsAndConditionsProperties = { ...properties };
  termsAndConditionsProperties.type = constantsUtils.TERMS_AND_CONDITIONS;
  termsAndConditionsProperties.title = constantsUtils.LOAN_TERMS_AND_CONDITIONS;
  termsAndConditionsProperties.IsRequired = true;
  termsAndConditionsProperties.default = '';
  termsAndConditionsProperties.hint = '';
  termsAndConditionsProperties.iconUrl = '';
  termsAndConditionsProperties.id = 'termsAndConditions';
  termsAndConditionsProperties.options = [];
  termsAndConditionsProperties.parentFieldId = '';

  // buttons
  const carLoanButtons = { ...buttons };
  carLoanButtons.title = 'Submit';

  carLoanScreens.properties = [
    firstNameProperties,
    lastNameProperties,
    mobileNumberProperties,
    emailProperties,
    panCardNumberProperties,
    pinCodeProperties,
    employmentTypeProperties,
    netMonthlySalaryCreditProperties,
    annualIncomeAsPerItrProperties,
    haveAnycreditCard,
    creditLimitProperties,
    creditCardBankNameProperties,
    confirmIfYouAreIndianNationalProperties,
    termsAndConditionsProperties,
  ];
  carLoanScreens.buttons = [carLoanButtons];

  return carLoanScreens;
};

module.exports = {
  homeLoanScreen,
  personaLoanScreen,
  carLoanScreen,
  creditCardLoanScreen,
};
