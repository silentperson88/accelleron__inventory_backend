const constantsUtils = require('../utils/constants.utils');
const { response } = require('../utils/response.utils');
const userService = require('../services/user.service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/auth.middleware');

exports.registerAdmin = async (req, res) => {
  try {
    const { body } = req;

    // check if user already exist
    const user = await userService.getByEmail(body.email);
    if (user) {
      return response(res, 409, constantsUtils.USER_ALREADY_EXIST);
    }

    // check password and confirm password
    if (body.password !== body.confirmPassword) {
      return response(res, 400, constantsUtils.PASSWORD_NOT_MATCH);
    }

    // hash password
    body.password = bcrypt.hashSync(body.password, 10);

    body.role = 'admin';

    const createdUser = await userService.createUser(body);
    return response(res, 201, constantsUtils.USER_CREATION_SUCCESS, createdUser);
  } catch (error) {
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { body } = req;

    // check role
    const token = req.headers.authorization;
    const decode = await jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    if (decode.role !== 'admin') {
      return response(res, 401, constantsUtils.UNAUTHORIZED_ACCESS);
    }

    // check if user already exist
    const user = await userService.getByEmail(body.email);
    if (user) {
      return response(res, 409, constantsUtils.USER_ALREADY_EXIST);
    }

    // check password and confirm password
    if (body.password !== body.confirmPassword) {
      return response(res, 400, constantsUtils.PASSWORD_NOT_MATCH);
    }

    // hash password
    body.password = bcrypt.hashSync(body.password, 10);

    if (!body.role) body.role = 'user';

    const createdUser = await userService.createUser(body);
    return response(res, 201, constantsUtils.USER_CREATION_SUCCESS, createdUser);
  } catch (error) {
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

exports.login = async (req, res, next) => {
  try {
    let error = new Error();
    let { email, password } = req.body;
    let isExists = await userService.getByEmail(email.toLowerCase());
    if (!isExists) {
      error.status = 400;
      error.message = constantsUtils.USER_NOT_REGISTERED;
      throw error;
    }

    //Check the user is inactive
    if (!isExists.isActive) {
      error.status = 401;
      error.message = constantsUtils.RESTRICTED_EMAIL_UPDATE;
      throw error;
    }

    let payload = {};

    // Checking if password field is not exist in DB
    if (!isExists.password) {
      error.status = 400;
      error.message = constantsUtils.NO_PASSWORD_FIELD_EXISTS;
      throw error;
    }

    // Using bcrypt library to compare hashPassword with incoming password
    let isMatch = bcrypt.compareSync(password, isExists.password);
    if (!isMatch) {
      error.status = 400;
      error.message = constantsUtils.PASSWORD_INCORRECT;
      throw error;
    }

    let userRole = isExists.role;

    // Passing payload as userId to generate token.
    let token = await authMiddleware.assignToken(isExists, userRole);
    // Get user detail By Id
    payload.token = token;
    payload.user = {
      email: isExists.email,
      fullName: isExists.firstName + ' ' + isExists.lastName,
      role: userRole,
    };

    response(res, 200, constantsUtils.LOGIN_SUCCESS, payload);
    next();
  } catch (err) {
    let statusErr = err.status ?? 500;
    let message = err.message ?? constantsUtils.INTERNAL_SERVER_ERROR;
    response(res, statusErr, message);
    next();
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const perPage = parseInt(req.query.perPage) || 10;
    const status = req.query.status || '';

    let filter = {};

    if (status !== '') {
      filter.isActive = status;
    }

    const users = await userService.getAllUsers(page, perPage, filter);
    return response(res, 201, constantsUtils.USER_FETCH_SUCCESS, users);
  } catch (error) {
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      return response(res, 404, constantsUtils.USER_NOT_FOUND);
    }
    return response(res, 201, constantsUtils.USER_FETCH_SUCCESS, user);
  } catch (error) {
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updatedUser = await userService.updateUser(id, body);
    if (!updatedUser) {
      return response(res, 404, constantsUtils.USER_NOT_FOUND);
    }
    return response(res, 201, constantsUtils.USER_UPDATE_SUCCESS, updatedUser);
  } catch (error) {
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};
