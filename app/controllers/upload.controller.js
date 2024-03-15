const constantUtils = require('../utils/constants.utils');
const { response } = require('../utils/response.utils');
const userService = require('../services/user.service');
const storageModel = require('../models/storage.model');
const xlsxtojson = require('xlsx-to-json');
const xlstojson = require('xls-to-json');
const fs = require('fs');

// Get All Users
exports.getAllExcelJSONData = async (req, res) => {
  try {
    const storeData = await storageModel.aggregate([{ $match: {} }]);

    response(res, 200, constantUtils.USER_RETRIVED_SUCCESSFULLY, storeData);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Create User
exports.excelUploader = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.file;

    const excel2json = req.file.originalname.endsWith('xlsx') ? xlsxtojson : xlstojson;

    const storages = await new Promise((resolve, reject) => {
      excel2json(
        {
          input: file.path,
          output: 'output/' + Date.now() + '.json',
          lowerCaseHeaders: true,
        },
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    const keys = Object.keys(storages[0]).map(key => key.replaceAll(' ', '_').toLowerCase());

    const keyToCheck = [
      'remarks',
      'sr._no.',
      'assly_id',
      'assembly_drawing_revision',
      'mach._id',
      'machining__drawing__revision',
      'desc',
      'qty',
      'storage_location',
      'date_of_packing',
    ];

    const isValidKeys = keyToCheck.every(key => keys.includes(key));

    if (!isValidKeys) {
      return res.status(400).json({
        msg: 'Key Mismatch',
      });
    }

    // await storageModel.deleteMany({});

    const modefiedStorages = storages.map(storeData => {
      const {
        REMARKS,
        'Sr. No.': sr_no,
        'ASSLY ID': assly_id,
        'Assembly Drawing REVISION': assembly_drawing_revision,
        'MACH. ID': mach_id,
        'Machining  Drawing  REVISION': machining_drawing_revision,
        DESC: desc,
        QTY: qty,
        'STORAGE LOCATION': storage_location,
        'DATE OF PACKING': date_of_packing,
      } = storeData;

      const parsedQty = parseInt(qty);
      let [day, month, year] = [undefined, undefined, undefined];

      if (date_of_packing.includes('.')) {
        [day, month, year] = date_of_packing.split('.').map(Number);
      } else if (date_of_packing.includes('/')) {
        [month, day, year] = date_of_packing.split('/').map(Number); // mm/dd/yy
      } else {
        // Handle the case when the separator is neither '.' nor '/'
        console.error('Invalid date format');
        // Handle the error or return null, for example:
        return null;
      }

      const fullYear = year.toString().length === 4 ? year : year.toString().length === 2 ? year >= 0 && year <= 99 ? 2000 + year : year : null;

      // Constructing a new Date object using year, month, and day components
      const dateValue = new Date(Date.UTC(fullYear, month - 1, day));

      const date = dateValue.toJSON();

      const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

      return {
        assly_id,
        assembly_drawing_revision,
        mach_id,
        machining_drawing_revision,
        desc,
        qty: isNaN(parsedQty) ? null : parsedQty,
        storage_location,
        date_of_packing: isoDateRegex.test(date) ? date : null,
      };
    });

    const storeData = await storageModel.insertMany(modefiedStorages);

    // Delete documents from the database that are not in the uploaded file
    // const srNo = storages.map(storeData => storeData["Sr. No."]);

    // const deleteQuery = {
    //   $or: [
    //     { 'Sr. No.': { $nin: srNo } }, // 'Sr. No.' not in srNo array
    //     { 'Sr. No.': { $exists: false } }, // 'Sr. No.' is undefined
    //     { 'Sr. No.': "" } // 'Sr. No.' is an empty string
    //   ]
    // };

    // await storageModel.deleteMany(deleteQuery, { new: true });

    fs.unlink(file.path, err => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully');
      }
    });

    response(res, 201, constantUtils.USER_CREATED, { file: req.file?.filename, storeData });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error });
  }
};

// Update upload data by id
exports.updatArtistById = async (req, res) => {
  try {
    const { id } = req.params;
    const formData = req.body;

    if (!id) {
      response(res, 400, constantUtils.USER_NOT_FOUND);
    }

    // Add UpdateArtistService;
    const data = await Artist.findById(id);

    await Artist.findByIdAndUpdate(
      id,
      {
        name: formData?.name || data?.name,
        email: formData?.email || data?.email,
        about: formData?.about || data?.about,
        speciality: formData?.speciality || data?.speciality,
      },
      { new: true }
    );

    response(res, 200, constantUtils.USER_UPDATED_SUCCESSFULLY);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Get User By Id
exports.getExcelJSONDataById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error('param id not found!');
    }

    // Create ArtistService.getArtistById;
    const artistById = await Artist.findOne({ _id: id }).exec();

    // const user = await userService.getUserById(userId);

    response(res, 200, constantUtils.USER_RETRIVED, artistById);
  } catch (error) {
    res.status(500).json({ error });
  }
};
