const config = {
  PORT: 3000,
  CORS_VERIFY: false,
  CORS_ORIGINS: ['http://your-site.com'],
  JWT_KEY: 'REMPLAZAR_A_BASE64',
  JWT_EXP: '1h',
  LOGGER_LEVEL: 'trace',
  LOGGER_FILENAME: 'log/REMPLAZAR_APP_NAME.log',
  MONGODB_URL: '' // Here your mongo db url
};

module.exports = config;
