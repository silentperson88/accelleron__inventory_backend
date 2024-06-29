require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

// Utils

exports.assignToken = async (user, role) => {
  let token = await jwt.sign(
    {
      id: user._id,
      role,
    },
    process.env.JWT_SECRET,
    {
      algorithm: 'HS256',
    },
    { expiresIn: '24h' /* expires in 24 hours*/ }
  );
  return token;
};

exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({
        status: false,
        message: 'Please send authentication token.',
      });
    }
    const decode = await jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    if (decode) {
      const user = await userService.getUserById(decode.id);

      if (user) {
        req.userData = user;
      } else {
        return res.status(400).json({
          status: false,
          message: 'User cannot access or no user exits',
        });
      }
    }

    return next();
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: 'Unauthorized access.sss',
    });
  }
};

exports.deletedAt = async (req, res, next) => {
  const deletedAt = {
    deletedAt: new Date(),
    deletedBy: req.userData.id,
    isDeleted: true,
  };
  req.deletedAt = deletedAt;
  next();
};

exports.updatedBy = async (req, res, next) => {
  req.body.updatedBy = req.userData.id;
  next();
};
