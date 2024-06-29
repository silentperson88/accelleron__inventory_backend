const express = require('express');
const routes = express.Router();

const palletValidator = require('../validators/pallet.validator');
const palletController = require('../controllers/pallet.controllers');

// middleware
const { validate } = require('../middlewares/validate.middleware');
const { verifyToken } = require('../middlewares/auth.middleware');

// post insert all of the rack data to rack db.
routes.post(
  '/',
  verifyToken,
  palletValidator.createRackValidationRule(),
  validate,
  palletController.createRack
);

// post insert single pallet data to rack db.
routes.post(
  '/pallet',
  verifyToken,

  palletValidator.createPalletValidationRule(),
  validate,
  palletController.createPallet
);

// get all pallet data
routes.get('/', verifyToken, palletController.getAllRacks);

routes.get('/pallet', verifyToken, palletController.getAllPallet);

// get single pallet data by id
routes.get('/:id', verifyToken, palletController.getPalletById);

// update pallet
routes.patch(
  '/pallet/:id',
  verifyToken,

  palletValidator.updatePalletValidationRule(),
  palletController.updatePallet
);

// delete pallet
routes.delete('/pallet/:id', verifyToken, palletController.deletePallet);

module.exports = routes;
