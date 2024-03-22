const palletModal = require('../models/pallet.modal');

exports.insetManyPallettoRack = async pallates => {
  return await palletModal.insertMany(pallates);
};

exports.findAlreadyExistRack = async rack => {
  return await palletModal.findOne(rack);
};

exports.findAlreadyExistPallet = async pallet => {
  return await palletModal.findOne(pallet);
};

exports.createPallet = async data => {
  const pallet = new palletModal(data);
  return await pallet.save();
};

exports.getAllRacks = async (filter, sort) => {
  let pipeline = [
    {
      $match: filter,
    },
    {
      $sort: {
        createdAt: sort === 'asc' ? 1 : -1,
      },
    },
    {
      $group: {
        _id: '$rack',
        totalPallet: {
          $sum: 1,
        },
      },
    },
    {
      $project: {
        _id: 0,
        rack: '$_id',
        totalPallet: 1,
      },
    },
  ];
  return palletModal.aggregate(pipeline);
};

exports.getAllPallet = async (filter, page, perPage, sort) => {
  return palletModal
    .find(filter)
    .skip(page * perPage)
    .limit(perPage)
    .sort({ createdAt: sort });
};

exports.getPalletById = async id => {
  return palletModal.findById(id);
};

exports.updatePallet = async (id, data) => {
  return palletModal.findByIdAndUpdate(id, data, { new: true });
};
