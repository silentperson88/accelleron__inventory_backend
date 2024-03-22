const express = require('express');
const routes = express.Router();

const palletValidator = require('../validators/pallet.validator');
const palletController = require('../controllers/pallet.controllers');
const { validate } = require('../middlewares/validate.middleware');

// post insert all of the rack data to rack db.
routes.post('/', palletValidator.createRackValidationRule(), validate, palletController.createRack);

// post insert single pallet data to rack db.
routes.post(
  '/pallet',
  palletValidator.createPalletValidationRule(),
  validate,
  palletController.createPallet
);

// get all pallet data
routes.get('/', palletController.getAllRacks);

routes.get('/pallet', palletController.getAllPallet);

// get single pallet data by id
routes.get('/:id', palletController.getPalletById);

// update pallet
routes.patch(
  '/pallet/:id',
  palletValidator.updatePalletValidationRule(),
  palletController.updatePallet
);

// delete pallet
routes.delete('/pallet/:id', palletController.deletePallet);

module.exports = routes;
