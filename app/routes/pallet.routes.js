const express = require('express');
const routes = express.Router();

const { createRackValidationRule } = require('../validators/rack.validator');
const { createPalletValidationRule } = require('../validators/pallet.validator');
const palletController = require('../controllers/pallet.controllers');
const { validate } = require('../middlewares/validate.middleware');

// post insert all of the rack data to rack db.
routes.post('/', createRackValidationRule(), validate, palletController.createRack);

// post insert single pallet data to rack db.
routes.post('/pallet', createPalletValidationRule(), validate, palletController.createPallet);

// get all pallet data
routes.get('/', palletController.getAllPallet);

module.exports = routes;
