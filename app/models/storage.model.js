const mongoose = require('mongoose');

// Storage Schema
const storageSchema = new mongoose.Schema({
  assly_id: {
    type: String,
    default: null,
  },
  assembly_drawing_revision: {
    type: String,
    default: null,
  },
  mach_id: {
    type: String,
    default: null,
  },
  machining_drawing_revision: {
    type: String,
    default: null,
  },
  desc: {
    type: String,
    default: null,
  },
  qty: {
    type: Number,
    default: null,
  },
  storage_location: {
    type: String,
    default: null,
  },
  date_of_packing: {
    type: Date,
    default: null,
  },
});

// Storage Model
module.exports = mongoose.model('storage', storageSchema);