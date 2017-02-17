const version = require('./version');
const connection = require('./connection');
const job = require('./job');
const printer = require('./printer');


module.exports = [].concat(version, connection, job, printer);
