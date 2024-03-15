/* models */
const userModel = require('../models/storage.model');

/* create user */
exports.createUser = async user => {
  return await userModel.create(user);
};

/* get by email */
exports.getUserByEmail = async email => {
  return userModel.findOne({
    email: email,
    isActive: true,
  });
};

/* get by mobile number */
exports.getUserByMobileNumber = async mobileNumber => {
  return userModel.findOne({
    mobileNumber: mobileNumber,
    isActive: true,
  });
};

/* check user already exist by email, phone number, and uid */
exports.checkUserExist = async (email, panCardNumber, mobileNumber, uid) => {
  return userModel.findOne({
    $or: [
      { email: email },
      { panCardNumber: panCardNumber },
      { mobileNumber: mobileNumber },
      { uid: uid },
    ],
    isActive: true,
  });
};

/* get by id */
exports.getUserById = async userId => {
  return userModel.findOne({
    _id: userId,
    isActive: true,
  });
};

/* update user */
exports.updateUser = async (userId, user) => {
  return await userModel.updateOne({ _id: userId }, { $set: user });
};

/* get all users */
exports.getAllUsers = async () => {
  return userModel.find({
    isActive: true,
  });
};

/* get all users by role */
exports.getAllUsersByRole = async role => {
  return userModel.find({
    role: role,
    isActive: true,
  });
};

/* check user already exist by uid */
exports.checkUserExistByUid = async uid => {
  return userModel.findOne({
    uid: uid,
    isActive: true,
  });
};

/* fetch last customer id */
exports.getLastCustomer = async () => {
  return userModel
    .find({
      customerId: { $ne: null },
    })
    .sort({ createdAt: -1 })
    .limit(1);
};
