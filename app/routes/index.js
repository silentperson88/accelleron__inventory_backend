const baseRoute = '/api';

module.exports = app => {
  app.use(`${baseRoute}/inventory`, require('./inventory.routes'));
  app.use(`${baseRoute}/rack`, require('./pallet.routes'));
};
