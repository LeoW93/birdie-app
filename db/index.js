'use strict';

const SqlServer = require('./SqlServer');

const config = {
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  port: 3306,
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  name: 'birdietest',
  table: 'census_learn_sql'
};


const db = new SqlServer(config);

module.exports = db;
