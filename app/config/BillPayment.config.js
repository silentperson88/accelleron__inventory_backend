const constantsUtils = require('../utils/constants.utils');
const { config, screen, properties, option, buttons } = require('../utils/jsonformat.utils');

exports.ElectricityForm = (operatorList, category) => {
  const electricityConfig = { ...config };

  const ScreenID = {
    Electricity: constantsUtils.ELECTRICITY_SCREEN_ID,
    EMI: constantsUtils.EMI_SCREEN_ID,
    Gas: constantsUtils.GAS_SCREEN_ID,
    Insurance: constantsUtils.INSURANCE_SCREEN_ID,
    Landline: constantsUtils.LANDLINE_SCREEN_ID,
    DTH: constantsUtils.DTH_SCREEN_ID,
    BroadBand: constantsUtils.BROADBAND_SCREEN_ID,
    Fastag: constantsUtils.FASTAG_SCREEN_ID,
    POSTPAID: constantsUtils.POSTPAID_SCREEN_ID,
    Cable: constantsUtils.CABLE_SCREEN_ID,
  };

  // insert electricity data
  electricityConfig.username = '';
  electricityConfig.id = '';
  electricityConfig.supportedVersion = '';
  electricityConfig.screens = {};
  electricityConfig.logoUrl = '';
  electricityConfig.contactId = '';

  // screens dinfo
  const electricityScreens = { ...screen };
  electricityScreens.title = `${category} Form`;
  electricityScreens.description = `${category} config file use for upading data on server.`;
  electricityScreens.type = 'form';
  electricityScreens.screenId = ScreenID[category];
  electricityScreens.color = '';
  electricityScreens.iconUrl = '';
  electricityScreens.properties = [];

  // create form using properties

  // Operator Field
  const operatorProperties = { ...properties };
  operatorProperties.type = constantsUtils.DROPDOWN_TYPE;
  operatorProperties.title = 'Operator';
  operatorProperties.IsRequired = true;
  operatorProperties.default = '';
  operatorProperties.hint = 'Select Operator';
  operatorProperties.iconUrl = '';
  operatorProperties.id = 'operator';
  operatorProperties.options = operatorList.map(item => {
    const optionProperties = { ...option };
    optionProperties.id = item.id;
    optionProperties.title = item.name;
    return optionProperties;
  });
  operatorProperties.parentFieldId = '';
  operatorProperties.range = {};

  // Customer Number
  const customerNumberProperties = { ...properties };
  customerNumberProperties.type = constantsUtils.TEXT_TYPE;
  customerNumberProperties.title = 'Customer Number';
  customerNumberProperties.IsRequired = true;
  customerNumberProperties.default = '';
  customerNumberProperties.hint = 'Enter Customer Number';
  customerNumberProperties.iconUrl = '';
  customerNumberProperties.id = 'canumber';
  customerNumberProperties.options = [];
  customerNumberProperties.parentFieldId = '';
  customerNumberProperties.range = {};

  // Amount Field
  // const amountProperties = { ...properties };
  // amountProperties.type = constantsUtils.NUMBER_TYPE;
  // amountProperties.title = 'Amount';
  // amountProperties.IsRequired = true;
  // amountProperties.default = '';
  // amountProperties.hint = 'Enter Amount';
  // amountProperties.iconUrl = '';
  // amountProperties.id = 'amount';
  // amountProperties.options = [];
  // amountProperties.parentFieldId = '';
  // amountProperties.range = {};

  // buttons
  const electricityButtons = { ...buttons };
  electricityButtons.title = 'Pay';

  electricityScreens.properties = [operatorProperties, customerNumberProperties];

  electricityConfig.screens = electricityScreens;
  electricityConfig.buttons = electricityButtons;

  return electricityConfig;
};
