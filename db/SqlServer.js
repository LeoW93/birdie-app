'use strict';

const mysql = require('mysql');

class SqlServer {
  constructor(config) {
    this.config = formatConfig(config);
    this.table = config.table;
  }

  createConnection() {
    let connection = mysql.createConnection(this.config);
    return connection;
  }

  performQuery(query) {
    let connection = this.createConnection();
    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          console.log('Error while performing query: ', query);
          console.log(err);
          return reject(err);
        }

        return resolve(results);
      });

      connection.end();
    });
  }

  getColumns() {
    return this.performQuery(`show columns from ${this.table}`);
  }

  getColumnInfo(column) {
    let query = `
      select \`${column}\` data, avg(age) as average, count(\`${column}\`) as count
      from ${this.table}
      group by \`${column}\`
      order by count desc
      limit 100
    `;

    return this.performQuery(query);
  }
}

function formatConfig(config) {
  return {
    user: config.user,
    password: config.password,
    host: config.host,
    port: config.port,
    database: config.name
  };
}

module.exports = SqlServer;
