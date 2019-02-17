'use strict';

module.exports = {
  method: 'get',
  endpoint: '/get-columns',
  handler: route
};

async function route(req) {
  let columns = await req.services.db.getColumns();

  let names = (columns|| []).map(c => c.Field);

  return names;
}
