const mongoose = require('mongoose');

// Rack Schema
const palletSchema = new mongoose.Schema(
  {
    rack: {
      type: String,
      default: null,
      required: true,
    },
    pallet: {
      type: String,
      default: null,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Rack Model
module.exports = mongoose.model('pallet ', palletSchema);
