const express = require('express');
const routes = express.Router();

const uploadController = require('../controllers/upload.controller');
const { validate } = require('../middlewares/validate.middleware');
const { upload, verifyFile } = require('../middlewares/upload.middleware');

const { excelUploader, getAllExcelJSONData, getExcelJSONDataById, updatArtistById } = uploadController;

// upload excel sheet to json in DB;
routes.post("/upload-file", upload.single("uploadfile"), excelUploader);

// get all excel data;
routes.get("/data", getAllExcelJSONData);

// get excel data by Id
routes.get("/:id", getExcelJSONDataById);

// update excel data by Id
routes.patch("/:id", updatArtistById);

module.exports = routes;
