const express = require('express');

module.exports = (app, services) => {
  let router = express.Router();

  let createDescriptor = applyRouteDescriptor(app, services);

  [require('./get-column-info'), require('./get-columns')].forEach(elm => createDescriptor(elm, router));

  return router;
};

function applyRouteDescriptor(app, services) {
  return function (descriptor, router) {
    let context = {app, services};
    let method = descriptor.method || 'post';
    let endpoint = descriptor.endpoint;
    let handler = wrapHandler(context, descriptor);

    app.use(endpoint, handler);

    let args = [
      endpoint,
      handler
    ];

    return router[method](...args);
  };
}

function wrapHandler(context, descriptor) {
  return async function(req, res, next) {
    let result = null;

    req.services = context.services;

    try {
      result = await descriptor.handler(req);
    } catch(error) {
      return next(error);
    }

    return res.send(result);
  };
}