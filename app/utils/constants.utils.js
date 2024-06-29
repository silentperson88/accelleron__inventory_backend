module.exports = {
  /* common */
  INTERNAL_SERVER_ERROR: 'Internal server error',
  NOT_FOUND: 'Not found',

  /* user */
  INVALID_FIRSTNAME: 'Please provide valid first name',
  INVALID_LASTNAME: 'Please provide valid last name',
  INVALID_EMAIL: 'Please provide valid email',
  EMPTY_EMAIL: 'Please provide email',
  INVALID_PASSWORD: 'Please provide valid password',
  PASSWORD_MIN_LENGTH: 'Password should be minimum 8 characters',
  PASSWORD_REGEX: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
  PASSWORD_MIN: 6,
  USER_ALREADY_EXIST: 'User already exist',
  USER_CREATION_SUCCESS: 'User created successfully',
  PASSWORD_NOT_MATCH: 'Password and confirm password does not match',
  USER_FETCH_SUCCESS: 'User fetched successfully',
  USER_NOT_FOUND: 'User not found',
  USER_UPDATE_SUCCESS: 'User updated successfully',
  USER_NOT_REGISTERED: 'User not registered',
  RESTRICTED_EMAIL_UPDATE: 'You are not allowed to update this email',
  NO_PASSWORD_FIELD_EXISTS: 'No password field exists',
  PASSWORD_INCORRECT: 'Password is incorrect',
  LOGIN_SUCCESS: 'Login successful',
  UNAUTHORIZED_ACCESS: 'Unauthorized access',

  /* excel upload */
  EXCEL_UPLOAD_SUCCESS: 'Inventory uploaded from Excel sheet successfully',
  EXCEL_UPLOAD_ERROR: 'Error uploading inventory from Excel sheet',
  EXCEL_UPLOAD_INVALID: 'Invalid Excel file',
  EXCEL_UPLOAD_EMPTY: 'Empty Excel file',
  EXCEL_UPLOAD_LIMIT: 'File must be 15MB or less',
  NO_FILE_UPLOADED: 'No file uploaded',

  /* inventory */
  INVENTORY_FETCH_SUCCESS: 'Inventory fetched successfully',
  INVENTORY_FETCH_ERROR: 'Error fetching inventory',

  /* Pallet */
  RACK_ALREADY_EXIST: 'Rack already exist',
  PALLET_ALREADY_EXIST: 'Pallet already exist',
  PALLET_CREATION_SUCCESS: 'Pallet created successfully',
  PALLET_CREATION_ERROR: 'Error pallet creation',
  PALLET_FETCH_SUCCESS: 'Pallet fetched successfully',
  PALLET_FETCH_ERROR: 'Error fetching pallet',
  INVALID_RACK: 'please provide valid rack',
  INVALID_ROW: 'please provide valid row',
  INVALID_COLUMN: 'please provide valid column',
  INVALID_IS_ACTIVE: 'please provide valid isActive',
  INVALID_PALLET: 'please provide valid pallet',
};
