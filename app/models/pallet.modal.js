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
    status: {
      type: String,
      enum: ['in-use', 'available', 'in-repair', 'damaged'],
      default: 'available',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    remark: {
      type: String,
      default: null,
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
