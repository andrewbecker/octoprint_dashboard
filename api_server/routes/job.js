'use strict';
const axios = require('axios');
const _ = require('lodash');
const BASE_URL = 'http://octoprintrecipes.dyndns.org:8081/';
const API_KEY = require('../config/config').API_KEY;

module.exports = [
	{
		method: 'GET',
		path: '/api/job',
		handler: function (request, reply) {
			axios
				.get(`${BASE_URL}api/job?apikey=${API_KEY}`)
				.then((response) => {
					console.log(response);
					reply(response.data);
				})
				.catch(() => {
					reply({
            "job": {
              "file": {
                "name": "whistle_v2.gcode",
                "origin": "local",
                "size": 1468987,
                "date": 1378847754
              },
              "estimatedPrintTime": 8811,
              "filament": {
                "length": 810,
                "volume": 5.36
              }
            },
            "progress": {
              "completion": 0.2298468264184775,
              "filepos": 337942,
              "printTime": 276,
              "printTimeLeft": 912
            }
          }).code(200);
				});
		}
	}
];
