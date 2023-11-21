const { Router } = require('./utils/router');
const ProxyService = require('./services/proxy-service');

// setup router
const router = Router({ trimTrailingSlash: true });
// router.get('/api/typeform', (event) => ProxyService.process(event.fullRequestParams));
router.unknown((event, context, path) => ProxyService.process(event, context, path));

// exposed lambda handler
exports.handler = async function (event, context) {
  // route
  let result = await router.route(event);
  return result.response;
}
