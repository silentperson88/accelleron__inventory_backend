/* models */
const User = require('../models/user.model');

/* create user */
exports.createUser = async user => {
  return await User.create(user);
};

/* get by email */
exports.getByEmail = async email => {
  return User.findOne({
    email: { $eq: email },
  });
};

/**
 * Update User
 *
 * @param {*} userId
 * @param {*} accountId
 * @returns
 */

/**
 * Update By User Id
 *
 * @param {*} id
 * @param {*} userData
 * @returns
 */
exports.getUserById = async id => {
  return User.findById(id);
};

exports.updateUser = async (id, userData) => {
  return User.findByIdAndUpdate(id, { $set: userData }, { new: true });
};

/**
 * Get All Users
 *
 * @param {*} page
 * @param {*} perPage
 * @param {*} accountId
 * @returns
 */
exports.getAllUsers = async (page, perPage, filter) => {
  return User.find(filter)
    .skip(page * perPage)
    .limit(perPage);
};
