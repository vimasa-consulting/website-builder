const qs = require('querystring');
const RESPONSE_HELPER = require('../utils/response-helper');
const Logger = require('../utils/logger');
const { HTTP_STATUS_CODES } = require('../utils/status-codes');
const { AppError } = require('../utils/error');

module.exports = {
  Router
};

function Router({
  extractPathParameters = true,
  trimTrailingSlash = true
} = {}) {
  const routes = [];
  const addRoute = (method, path, handler, options = { auth: null }) => {
    routes.push({ method, path, handler, options });
  };
  let unknownRouteHandler = defaultUnknownRoute;
  let defaultHeaders = {
    'Content-Type': 'application/json'
  };

  const route = async (event, context, config) => {
    let statusCode, body;
    let headers = { ...defaultHeaders };
    let httpMethod = event.method || event.httpMethod;
    let requestPath = event.path || event.resourcePath || event.resource;

    if (trimTrailingSlash) {
      requestPath = requestPath.replace(/\/$/, '');
    }

    let route = getRoute(routes, event, requestPath, httpMethod, extractPathParameters);
    let hasBody = event.body && typeof event.body === 'string';
    let contentType =
      event.headers && (event.headers['content-type'] || event.headers['Content-Type']);
    let jsonBody = hasBody && contentType && contentType.toLowerCase().includes('application/json');
    let urlEncodedBody = hasBody && contentType && contentType.toLowerCase().includes('application/x-www-form-urlencoded');

    // Parse and decode
    try {
      event.rawBody = event.body;
      if (jsonBody) event.body = JSON.parse(event.body);
      else if (urlEncodedBody) event.body = qs.parse(event.body);
      else event.body = {};
      event.pathParameters = decodeProperties(event.pathParameters || {});
      event.queryStringParameters = decodeProperties(event.queryStringParameters || {});
      // attach fullRequestParams
      let requestParameterSources = [];
      if (hasBody) {
        requestParameterSources.push(event.body);
      }
      requestParameterSources.push(event.queryStringParameters);
      // requestParameterSources.push(event.pathParameters);
      event.fullRequestParams = requestParameterSources.reduce(function (result, current) {
        return Object.assign(result, current);
      }, {});
    } catch (error) {
      Logger.debug("Route error", { error: error });
      return createResponse(
        HTTP_STATUS_CODES.BAD_REQUEST,
        {
          errors: [{
            status: HTTP_STATUS_CODES.BAD_REQUEST.toString(),
            title: 'Malformed request'
          }]
        },
        defaultHeaders,
        route.path,
        requestPath
      );
    }

    // Route
    try {
      Logger.info("Route handler processing", { requestPath, httpMethod });
      let result = await (route
        ? route.handler(event, context, config)
        : unknownRouteHandler(event, context, requestPath, httpMethod));
      statusCode = 200;
      body = result;
      Logger.info("Route handler success", { body: body });
    } catch (error) {
      if (!(error instanceof AppError)) {
        // log unrecognised error
        Logger.error("Route handler failure", { error });
      } else if (error.statusCode >= 500) {
        Logger.error("Route handler failure", { error });
      } else {
        Logger.info("Route handler failure", { error });
      }
      // modify
      statusCode = error.statusCode || 500;
      let errors = error.errors || [{
        status: statusCode.toString(),
        title: "error occured"
      }];
      if (error.errorJSON) {
        body = error.errorJSON;
      } else if (error.meta) {
        body = { meta: error.meta, errors: errors };
      } else {
        body = { errors: errors };
      }
    }
    return createResponse(statusCode, body, headers, route && route.path, requestPath);
  };

  // Bound router functions
  return {
    get: addRoute.bind(null, 'GET'),
    post: addRoute.bind(null, 'POST'),
    put: addRoute.bind(null, 'PUT'),
    patch: addRoute.bind(null, 'PATCH'),
    delete: addRoute.bind(null, 'DELETE'),
    unknown: handler => {
      unknownRouteHandler = handler;
    },
    route
  };
}

function getRoute(routes, event, eventPath, method, tokenizePathParts) {
  let route = routes.find(r => {
    return eventPath === r.path && method === r.method;
  });
  if (!route) {
    let tokens;
    route = routes.find(r => {
      if (method !== r.method) return false;
      tokens = doPathPartsMatch(eventPath, r);
      return !!tokens;
    });
    if (tokenizePathParts && tokens) {
      if (!event.pathParameters) event.pathParameters = {};
      Object.assign(event.pathParameters, tokens);
    }
  }
  return route;
}

function doPathPartsMatch(eventPath, route) {
  const eventPathParts = eventPath.split('/');
  const routePathParts = route.path.split('/');

  // Fail fast if they're not the same length
  if (eventPathParts.length !== routePathParts.length) return false;
  let tokens = {};

  // Start with 1 because the url should always start with the first back slash
  for (let i = 1; i < eventPathParts.length; ++i) {
    const pathPart = eventPathParts[i];
    const routePart = routePathParts[i];

    // If the part is a curly braces value
    let pathPartMatch = /\{(\w+)}/g.exec(routePart);
    if (pathPartMatch) {
      tokens[pathPartMatch[1]] = pathPart;
      continue;
    }

    // Fail fast if a part doesn't match
    if (routePart !== pathPart) {
      return false;
    }
  }

  return tokens;
}

function defaultUnknownRoute(event, context, path) {
  throw new AppError({
    message: `No route specified for path: ${path}`,
    statusCode: HTTP_STATUS_CODES.NOT_FOUND,
    errors: [{
      status: HTTP_STATUS_CODES.NOT_FOUND.toString(),
      title: `No route specified for path: ${path}`
    }]
  });
}

function createResponse(statusCode, body, headers, endpoint, uri) {
  return {
    endpoint,
    uri,
    isOk: statusCode.toString()[0] === '2',
    response: RESPONSE_HELPER.prepareLambdaResponse(body, statusCode, headers)
  };
}

function decodeProperties(obj) {
  return (
    obj &&
    Object.keys(obj).reduce((r, key) => {
      r[key] = decodeURIComponent(obj[key]);
      return r;
    }, {})
  );
}