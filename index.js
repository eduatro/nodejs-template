const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const logger = require('./src/commons/logger');
const PORT = config.PORT || 3000;
const MONGO_URL = config.MONGODB_URL;

let app = express();

require('./src')(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  logger.info('Server running on port:', PORT);
  if (MONGO_URL) {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true})
      .then(db => logger.info('Mongo DB connected successfully!'),
        err => logger.error('Unable to connect Mongo DB: ', err));
  } else {
    logger.warn('MongoDB url not defined in config file');
  }
});