'use strict';

const services = require('./services');

let app = require('./app')(services);

require('./routes')(app, services);
