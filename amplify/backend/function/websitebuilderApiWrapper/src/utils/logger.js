const util = require('util');

const Logger = {
  debug(message, data = {}) {
    console.debug('LEVEL:: debug', 'message:', message, util.inspect(data, false, 2));
  },
  error(message, data = {}) {
    console.error('LEVEL:: error', 'message:', message, util.inspect(data, false, Infinity));
  },
  info(message, data = {}) {
    console.info('LEVEL:: info', 'message:', message, util.inspect(data, false, 3));
  },
  warn(message, data = {}) {
    console.warn('LEVEL:: warn', 'message:', message, util.inspect(data));
  },
};

module.exports = Logger;
