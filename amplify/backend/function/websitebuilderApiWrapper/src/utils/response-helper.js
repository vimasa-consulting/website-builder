//expects original event triggered by api gateway
exports.getQueryParameter = function (parameter, event) {
  return ((event.queryStringParameters || {})[parameter]);
}

exports.prepareLambdaResponse = function (body, statusCode, headers = {}, multiValueHeaders = {}) {
  if (headers['Content-Type'] === undefined) headers['Content-Type'] = 'application/json';
  // enable cors
  headers['Access-Control-Allow-Origin'] = '*';
  return {
    statusCode,
    body: typeof body === 'object' ? JSON.stringify(body) : body,
    headers: { ...headers },
    multiValueHeaders: { ...multiValueHeaders }
  }
}
