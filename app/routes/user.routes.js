const express = require('express');
const routes = express.Router();

const { validate } = require('../middlewares/validate.middleware');
const userController = require('../controllers/user.controller');

// middleware
const { verifyToken } = require('../middlewares/auth.middleware');

// Validator
const validator = require('../validators/user.validator');

routes.post(
  '',
  verifyToken,
  validator.createUserValidationRule(),
  validate,
  userController.createUser
);
routes.post('/admin', validator.createUserValidationRule(), validate, userController.registerAdmin);
routes.post('/login', validate, userController.login);
routes.get('', verifyToken, validate, userController.getAllUsers);
routes.get('/:id', verifyToken, validate, userController.getUserById);
routes.patch('/:id', verifyToken, validate, userController.updateUser);

module.exports = routes;
