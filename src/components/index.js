const logger = require('./../commons/logger');

module.exports = function(app) {
  require('./authenticate')(app);

  logger.info('Components loaded');
};
