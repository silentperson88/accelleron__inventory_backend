const palletModal = require("../models/pallet.modal");

exports.insetManyPallettoRack = async (pallates) => {
  return await palletModal.insertMany(pallates);
};

exports.findAlreadyExistRack = async (rack) => {
  return await palletModal.findOne(rack);
};

exports.findAlreadyExistPallet = async (pallet) => {
  return await palletModal.findOne(pallet);
};

exports.createPallet = async (data) => {
  const pallet = new palletModal(data);
  return await pallet.save();
};

exports.getAllPallet = async () => {
  return palletModal.find({ $or: [{ deletedAt: null }, { isActive: false }] });
};

exports.getPalletById = async (id) => {
  return palletModal.findById(id);
};