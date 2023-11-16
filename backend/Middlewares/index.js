// middleware/index.js
const loggerMiddleware = require('./logger');
const authenticationMiddleware = require('./authenticate');

module.exports = {
  loggerMiddleware,
  authenticationMiddleware,
  // Add other middleware exports...
};
