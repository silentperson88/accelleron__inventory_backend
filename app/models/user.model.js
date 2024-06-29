const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    role: {
      enum: ['admin', 'user'],
      type: String,
      default: 'user',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    resetExpiresIn: {
      type: Date,
      default: null,
    },
    resetToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', User);
