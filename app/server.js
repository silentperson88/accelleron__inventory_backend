// local environment variable
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { CronJob } = require('cron');

// db connections
require('../config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // preflightContinue: false,
    // optionsSuccessStatus: 204,
  })
);
// Here Using requestLogs to console all api incoming request
morgan.token('requestId', req => {
  return req.id;
});

// routes
require('./routes/index')(app);

// uploads
app.use('/images', express.static(path.join(__dirname, '../uploads/image')));

// Runs at 23:50 everyday
new CronJob(
  '50 23 * * *', // cronTime
  function () {
    tokenServices();
    console.log('New Token Created');
  }, // onTick
  null, // onComplete
  true, // start
  'America/Los_Angeles' // timeZone
);

// Serve static files from the 'frontend-build' directory
app.use(express.static(path.join(__dirname, '../../frontend_funding_india/build')));

app.get('*', (req, res) => {
  console.log('I am in');
  // return res.status(200).send(`<h4>Welcome to Funding App</h4> ${__dirname}`);
  res.sendFile(path.join(__dirname, '../../frontend_funding_india/build', 'index.html'));
});

module.exports = app;
