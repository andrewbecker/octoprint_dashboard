'use strict';

const Hapi = require('hapi');
const base_routes = require('../routes/base_routes');
const inert = require('inert');

function createServer(port) {
	const server = new Hapi.Server();
	server.connection({
		host: 'localhost',
		port: 3000
	});

	// Register static files
	server.register(require('inert'), (err) => {
		if (err) { throw err; }

		server.route({
			method: 'GET',
			path: '/{file*}',
			handler: {
				directory: {
					path: 'client_assets'
				}
			}
		});
	});

	// Load routes
	server.route(base_routes);

	return server;
}

module.exports = {
	createServer: createServer
};
