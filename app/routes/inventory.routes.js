const express = require('express');
const routes = express.Router();

const inventoryController = require('../controllers/inventory.controller');
const { upload } = require('../middlewares/upload.middleware');

// middleware
const { verifyToken } = require('../middlewares/auth.middleware');

// upload excel sheet to json in DB;
routes.post(
  '/fromexcel',
  verifyToken,
  upload.single('uploadfile'),
  inventoryController.excelUploader
);

// get all inventory data
routes.get('/', verifyToken, inventoryController.getAllInventory);

module.exports = routes;
