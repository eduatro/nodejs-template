let expressJWT = require('express-jwt');
const config = require('./../../config/config');
const logger = require('./../commons/logger');

module.exports = function(app) {

  app.use(expressJWT({secret: config.JWT_KEY})
    .unless({path: ['/', '/auth']}));

  // this middlewares is only executed when a error occurred
  app.use((err, req, res, next) => {

    if (err.status === 401) {
      let errorMessage = 'Invalid token';
      logger.error('[middleware][authenticate]', errorMessage);
      res.status(401).send(errorMessage);
    } else {
      logger.error(err.message);

      logger.error('[authenticate] error is not 401, ignoring');
      next();
    }
  });

};
