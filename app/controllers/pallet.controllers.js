const constantsUtils = require('../utils/constants.utils');
const { response } = require('../utils/response.utils');
const palletSerive = require('../services/pallet.service');

// generate multiple pallate with single rack name using palletRow, palletColumn;
exports.createRack = async (req, res) => {
  try {
    const { rack, palletRow, palletColumn } = req.body;

    const alreadyExistRack = await palletSerive.findAlreadyExistRack({ rack });

    if (alreadyExistRack) {
      return response(res, 400, constantsUtils.RACK_ALREADY_EXIST);
    }

    const multiplePalletForSameRack = [];

    Array.from({ length: palletRow }).forEach((_, i) =>
      Array.from({ length: palletColumn }).forEach((_, j) =>
        multiplePalletForSameRack.push(`${rack}${i}-${j}`)
      )
    );

    const modifiedRackEntry = multiplePalletForSameRack.map(pallet => ({
      rack,
      pallet,
    }));

    const pallate = await palletSerive.insetManyPallettoRack(modifiedRackEntry);

    if (pallate.length <= 0) {
      return response(res, 404, constantsUtils.PALLET_CREATION_ERROR);
    }

    return response(res, 201, constantsUtils.PALLET_CREATION_SUCCESS, pallate);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

// create single pallet with rack name, rowIndex, columnIndex;
exports.createPallet = async (req, res) => {
  try {
    const { rack, rowIndex, columnIndex } = req.body;

    const modifiedPallet = `${rack}${rowIndex}-${columnIndex}`;

    const alreadyExistRack = await palletSerive.findAlreadyExistRack({ rack });
    const alreadyExistPallet = await palletSerive.findAlreadyExistPallet({
      pallet: modifiedPallet,
    });

    if (!alreadyExistRack) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    if (alreadyExistPallet) {
      return response(res, 404, constantsUtils.PALLET_ALREADY_EXIST);
    }

    const palletRes = await palletSerive.createPallet({ rack, pallet: modifiedPallet });

    return response(res, 201, constantsUtils.PALLET_CREATION_SUCCESS, palletRes);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

// get all rack data
exports.getAllRacks = async (req, res) => {
  try {
    let sort = req.query.sort || 'asc';

    let filter = {
      $and: [{ deletedAt: null }],
    };

    const allRack = await palletSerive.getAllRacks(filter, sort);

    if (!allRack) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    return response(res, 201, constantsUtils.PALLET_FETCH_SUCCESS, allRack);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

// get all pallet data
exports.getAllPallet = async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 0;
    let perPage = parseInt(req.query.perPage) || 10;
    let sort = req.query.sort || 'desc';
    let rack = req.query.rack || '';
    let isActive = req.query.isActive || '';

    let filter = {
      $and: [{ deletedAt: null }],
    };

    if (rack) {
      filter = {
        ...filter,
        rack,
      };
    }

    if (isActive) {
      filter = {
        ...filter,
        isActive,
      };
    }

    const allPallet = await palletSerive.getAllPallet(filter, page, perPage, sort);

    console.log('Pallet', allPallet);

    if (!allPallet) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    return response(res, 201, constantsUtils.PALLET_FETCH_SUCCESS, allPallet);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

// get single pallet data by id
exports.getPalletById = async (req, res) => {
  try {
    const { id } = req.params;

    const pallet = await palletSerive.getPalletById(id);

    if (!pallet) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    return response(res, 201, constantsUtils.PALLET_FETCH_SUCCESS, pallet);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

// update pallet
exports.updatePallet = async (req, res) => {
  try {
    console.log('req.params:', req.params);
    const { id } = req.params;
    const isActive = req.body.isActive;
    const remark = req.body.remark || '';

    const pallet = await palletSerive.getPalletById(id);

    if (!pallet) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    const updatedPallet = await palletSerive.updatePallet(id, { isActive, remark });

    return response(res, 201, constantsUtils.PALLET_FETCH_SUCCESS, updatedPallet);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

// delete pallet
exports.deletePallet = async (req, res) => {
  try {
    const { id } = req.params;

    // is Valid ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return response(res, 404, constantsUtils.INVALID_PALLET);
    }

    const pallet = await palletSerive.getPalletById(id);

    if (!pallet) {
      return response(res, 404, constantsUtils.INVALID_PALLET);
    }

    let updatedData = {
      deletedAt: new Date(),
      isActive: false,
    };

    const updatedPallet = await palletSerive.updatePallet(id, updatedData);

    return response(res, 201, constantsUtils.PALLET_FETCH_SUCCESS, updatedPallet);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};
