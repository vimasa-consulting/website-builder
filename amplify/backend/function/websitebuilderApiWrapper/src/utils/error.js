const { HTTP_STATUS_CODES } = require('../utils/status-codes');

class AppError extends Error {
  constructor({ message, statusCode, errors, errorJSON }) {
    super(message);
    this.statusCode = statusCode || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
    this.errors = errors || [];
    this.errorJSON = errorJSON;
  }
}

module.exports = {
  AppError,
};
