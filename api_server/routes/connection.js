'use strict';
const axios = require('axios');
const _ = require('lodash');
const BASE_URL = 'http://octoprintrecipes.dyndns.org:8081/';
const API_KEY = require('../config/config').API_KEY;

module.exports = [
	{
		method: 'GET',
		path: '/api/connection',
		handler: function (request, reply) {
			axios
				.get(`${BASE_URL}api/connection?apikey=${API_KEY}`)
				.then((response) => {
					console.log(response);
					reply(response.data);
				})
				.catch(() => {
					reply({
					  "current": {
					    "state": "Operational",
					    "port": "/dev/ttyACM0",
					    "baudrate": 250000,
					    "printerProfile": "_default"
					  },
					  "options": {
					    "ports": ["/dev/ttyACM0", "VIRTUAL"],
					    "baudrates": [250000, 230400, 115200, 57600, 38400, 19200, 9600],
					    "printerProfiles": [{"name": "Default", id: "_default"}],
					    "portPreference": "/dev/ttyACM0",
					    "baudratePreference": 250000,
					    "printerProfilePreference": "_default",
					    "autoconnect": true
					  }
					}).code(200);
				});
		}
	}
];
