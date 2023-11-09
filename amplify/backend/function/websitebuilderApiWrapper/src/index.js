const { Router } = require('./utils/router');
const ProxyService = require('./services/proxy-service');

// TODO: make a generic proxy without route def

// setup router
const router = Router({ trimTrailingSlash: true });
router.get('/api/typeform', (event) => ProxyService.process(event.fullRequestParams));

// exposed lambda handler
exports.handler = async function (event, context) {
  // route
  let result = await router.route(event);
  return result.response;
}
