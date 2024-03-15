require('dotenv').config();
require('./app/utils/global-constants.utils');
const PORT = process.argv[2] || process.env.PORT || 8005;
const app = require('./app/server');

module.exports = app.listen(PORT, '0.0.0.0', () => {
  console.log('server is running on port %s', PORT);
});
