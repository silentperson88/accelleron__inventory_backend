const express = require('express');
const routes = express.Router();

const inventoryController = require('../controllers/inventory.controller');
const { upload } = require('../middlewares/upload.middleware');

// upload excel sheet to json in DB;
routes.post('/fromexcel', upload.single('uploadfile'), inventoryController.excelUploader);

// get all inventory data
routes.get('/', inventoryController.getAllInventory);

module.exports = routes;
