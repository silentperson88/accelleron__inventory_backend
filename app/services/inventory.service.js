// excelService.js

const inventoryModel = require('../models/inventory.model');

// insert many data to database
exports.saveDataToDatabase = async data => {
  return inventoryModel.insertMany(data);
};

// get all inventory data
exports.getAllInventory = async (filter, page, perPage, sort) => {
  return inventoryModel
    .find(filter, {
      deletedAt: 0,
      __v: 0,
    })
    .skip(page * perPage)
    .limit(perPage)
    .sort({ date_of_packing: sort });
};
