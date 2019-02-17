'use strict';

const ERR_NOTFOUND = {status: 404, message: 'Column not found'};
const ERR_NOCOLUMN = {status: 404, message: 'Column name not provided'};

module.exports = {
  endpoint: '/get-column-info',
  method: 'post',
  handler: route
};


async function route(req) {
  if (!req.body.column) {
    throw ERR_NOCOLUMN;
  }


  let info;

  info = await req.services.db.getColumnInfo(req.body.column);

  if (!info) {
    throw ERR_NOTFOUND;
  }

  return info;
}
