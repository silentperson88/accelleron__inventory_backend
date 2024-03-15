const mongoose = require('mongoose');
const { DEV_DB_URL } = process.env;

const url = DEV_DB_URL;

// DB Connection Start
// mongoose.set('debug', true);
mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED SUCCESSFULLY...'))
  .catch(err => console.log(err));
