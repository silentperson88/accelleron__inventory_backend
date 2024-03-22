const constantUtils = require('../utils/constants.utils');
const { response } = require('../utils/response.utils');
const inventoryService = require('../services/inventory.service');
const xlsxtojson = require('xlsx-to-json');
const xlstojson = require('xls-to-json');
const fs = require('fs');

exports.excelUploader = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: constantUtils.NO_FILE_UPLOADED });
    }

    const excel2json = req.file.originalname.endsWith('xlsx') ? xlsxtojson : xlstojson;

    // eslint-disable-next-line no-undef
    const storages = await new Promise((resolve, reject) => {
      excel2json(
        {
          input: file.path,
          output: 'uploads/' + Date.now() + '_' + Math.random().toString(36).substring(7) + '.json', // Unique output file name
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
      return res.status(400).json({ error: 'Key mismatch' });
    }

    const modifiedStorages = storages.map(storeData => {
      const {
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

      if (date_of_packing) {
        if (date_of_packing.includes('.')) {
          [day, month, year] = date_of_packing.split('.').map(Number);
        } else if (date_of_packing.includes('/')) {
          [month, day, year] = date_of_packing.split('/').map(Number); // mm/dd/yy
        } else {
          console.error('Invalid date format');
        }
      }

      const fullYear =
        year?.toString().length === 4
          ? year
          : year?.toString().length === 2
          ? year >= 0 && year <= 99
            ? 2000 + year
            : year
          : null;

      const dateValue = fullYear ? new Date(Date.UTC(fullYear, month - 1, day)) : null;

      const date = dateValue?.toJSON();
      const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

      const result = {
        assly_id,
        assembly_drawing_revision,
        mach_id,
        machining_drawing_revision,
        desc,
        qty: isNaN(parsedQty) ? null : parsedQty,
        storage_location,
      };

      if (date && isoDateRegex.test(date)) {
        result.date_of_packing = date;
      }

      return result;
    });

    const storeData = await inventoryService.saveDataToDatabase(modifiedStorages);

    await fs.promises.unlink(file.path);

    // res.status(201).json({ file: file.filename, storeData });
    response(res, 201, { file: file.filename, storeData });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantUtils.INTERNAL_SERVER_ERROR });
  }
};

exports.getAllInventory = async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 0;
    let perPage = parseInt(req.query.perPage) || 10;
    let sort = req.query.sort || 'desc';
    let { search } = req.query;

    let filterData = {
      deletedAt: null,
    };

    if (search) {
      filterData = {
        ...filterData,
        $or: [
          { assly_id: { $regex: search, $options: 'i' } },
          { mach_id: { $regex: search, $options: 'i' } },
          { desc: { $regex: search, $options: 'i' } },
          { storage_location: { $regex: search, $options: 'i' } },
        ],
      };
    }

    const inventory = await inventoryService.getAllInventory(filterData, page, perPage, sort);
    response(res, 200, constantUtils.INVENTORY_FETCH_SUCCESS, inventory);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantUtils.INTERNAL_SERVER_ERROR });
  }
};
