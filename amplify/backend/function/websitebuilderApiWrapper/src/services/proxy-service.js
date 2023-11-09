const axios = require('axios').default;
const Logger = require('../utils/logger');
const { HTTP_STATUS_CODES } = require('../utils/status-codes');
const config = require('../config');
const { AppError } = require('../utils/error')

class ProxyService {

  static async process({ formId, responseId }) {
    Logger.info('ProxyService.process', { formId, responseId });
    // delete eventData.proxy; // remove lambda proxy payload data
    const targetAppBaseURL = `http://52.23.192.205/typeform?formId=${formId}&responseId=${responseId}`;
    Logger.info('ProxyService.process proxying to target', { targetAppBaseURL });
    return ProxyService.proxyToTarget(targetAppBaseURL, {});
  }

  static async proxyToTarget(url, payload) {
    try {
      const response = await axios.get(url); // TODO: make generic
      return response.data;
    } catch (error) {
      if (error.response) {
        Logger.error('ProxyService.proxyToTarget failed', {
          url, payload, status: error.response.status, response: error.response.data
        });
      } else if (error.request) {
        Logger.error('ProxyService.proxyToTarget failed', { url, payload, request: error.request });
      } else {
        Logger.error('ProxyService.proxyToTarget failed', { url, payload, error });
      }
      throw new AppError({
        message: "Failed to proxy webhook",
        statusCode: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
        errors: [{
          status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR.toString(),
          title: 'Unknown error occured',
        }],
      });
    }
  }

}

module.exports = ProxyService;