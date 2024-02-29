const axios = require('axios').default;
const Logger = require('../utils/logger');
const { HTTP_STATUS_CODES } = require('../utils/status-codes');
const config = require('../config');
const { AppError } = require('../utils/error');

class ProxyService {

  static async process(event, context, path) {
    const { httpMethod, fullRequestParams } = event;
    Logger.info('ProxyService.process', { httpMethod, fullRequestParams, path });
    const targetPath = path.replace('/api', '');
    const targetURL = `http://54.198.142.52${targetPath}`;
    const targetHeaders = {};
    if (event.headers?.['Authorization']) {
      targetHeaders['Authorization'] = event.headers['Authorization'];
    }
    return ProxyService.proxyToTarget(targetURL, httpMethod, targetHeaders, fullRequestParams);
  }

  static async proxyToTarget(url, method, headers, payload) {
    const requestConfig = { url, method, headers, timeout: 20000 }
    if (method === 'GET') {
      requestConfig.params = payload;
    } else {
      requestConfig.data = payload;
    }
    Logger.info('ProxyService.proxyToTarget', { requestConfig });
    try {
      const response = await axios(requestConfig);
      return response.data;
    } catch (error) {
      if (error.response) {
        Logger.info('ProxyService.proxyToTarget failure response received', {
          requestConfig, status: error.response.status, response: error.response.data
        });
        throw new AppError({
          message: "Error response from proxy",
          statusCode: error.response.status,
          errorJSON: error.response.data
        });
      } else if (error.request) {
        Logger.error('ProxyService.proxyToTarget failed', { requestConfig, request: error.request });
      } else {
        Logger.error('ProxyService.proxyToTarget failed', { requestConfig, error });
      }
      throw new AppError({
        message: "Failed to proxy",
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