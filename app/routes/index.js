const baseRoute = '/api/v1';

module.exports = app => {
  app.use(`${baseRoute}/excel`, require('./upload.route'));
};
