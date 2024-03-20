const constantsUtils = require('../utils/constants.utils');
const { response } = require('../utils/response.utils');
const {
  findAlreadyExistRack,
  findAlreadyExistPallet,
  createPallet,
  getAllPallet,
  insetManyPallettoRack,
} = require('../services/pallet.service');

exports.createRack = async (req, res) => {
  try {
    // generate multiple pallate with single rack name using palletRow, palletColumn;
    const { rack, palletRow, palletColumn } = req.body;

    if (
      rack === '' ||
      palletRow === '' ||
      palletColumn === '' ||
      typeof palletColumn !== 'number' ||
      typeof palletRow !== 'number' ||
      typeof rack !== 'string'
    ) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    const alreadyExistRack = await findAlreadyExistRack({ rack });

    if (alreadyExistRack) {
      return response(res, 403, constantsUtils.RACK_ALREADY_EXIST);
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

    const pallate = await insetManyPallettoRack(modifiedRackEntry);

    if (pallate.length <= 0) {
      return response(res, 403, constantsUtils.PALLET_CREATION_ERROR);
    }

    return response(res, 201, constantsUtils.PALLET_CREATION_SUCCESS);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

exports.createPallet = async (req, res) => {
  try {
    const { rack, rowIndex, columnIndex } = req.body;

    if (
      rack === '' ||
      rowIndex === '' ||
      columnIndex === '' ||
      typeof columnIndex !== 'number' ||
      typeof rowIndex !== 'number' ||
      typeof rack !== 'string'
    ) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    const modifiedPallet = `${rack}${rowIndex}-${columnIndex}`;

    const alreadyExistRack = await findAlreadyExistRack({ rack });
    const alreadyExistPallet = await findAlreadyExistPallet({ pallet: modifiedPallet });

    if (!alreadyExistRack) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    if (alreadyExistPallet) {
      return response(res, 404, constantsUtils.PALLET_ALREADY_EXIST);
    };

    await createPallet({ rack, pallet: modifiedPallet });

    return response(res, 201, constantsUtils.PALLET_CREATION_SUCCESS);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};

exports.getAllPallet = async (_, res) => {
  try {
    const allPallet = await getAllPallet();

    if (allPallet.length <= 0) {
      return response(res, 404, constantsUtils.NOT_FOUND);
    }

    return response(res, 201, constantsUtils.PALLET_FETCH_SUCCESS, allPallet);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: constantsUtils.INTERNAL_SERVER_ERROR });
  }
};