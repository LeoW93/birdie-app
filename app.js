'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const swig = require('swig');
const config = require('./webpack.config');

module.exports = () => {
  const port = 3008;
  const app = express();

  let compiler = webpack(config);

  let VIEWS_DIRECTORY = path.join(__dirname, 'dist');

  app.set('views', VIEWS_DIRECTORY);
  app.set('view engine', 'html');
  app.engine('html', swig.renderFile);

  app.use(bodyParser.json({limit: '5mb'}));

  app.use(webpackDevMiddleware(compiler, {publicPath: '/', logLevel: 'info'}));

  app.get('/', (req, res) => {
    return res.render('index');
  });

  app.listen(port, () => {
    console.log('Server started on ' + port);
  });

  return app;
};
