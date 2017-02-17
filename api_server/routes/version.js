'use strict';
const axios = require('axios');
const _ = require('lodash');
const BASE_URL = 'http://octoprintrecipes.dyndns.org:8081/';
const API_KEY = require('../config/config').API_KEY;

module.exports = [
	{
		method: 'GET',
		path: '/api/version',
		handler: function (request, reply) {
			axios
				.get(`${BASE_URL}api/version?apikey=${API_KEY}`)
				.then((response) => {
					console.log(response);
					reply(response.data);
				})
				.catch(() => {
					reply({
						"api": "0.1",
						"server": "1.1.0"
					}).code(200);
				});
		}
	}
];
