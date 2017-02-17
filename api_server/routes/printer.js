'use strict';
const axios = require('axios');
const _ = require('lodash');
const BASE_URL = 'http://octoprintrecipes.dyndns.org:8081/';
const API_KEY = require('../config/config').API_KEY;

module.exports = [
	{
		method: 'GET',
		path: '/api/printer',
		handler: function (request, reply) {
			var params = request.query
			axios
				.get(`${BASE_URL}/api/printer?history=${params.history}&limit=${params.limit}&apikey=${API_KEY}`)
				.then((response) => {
					console.log(response);
					reply(response.data);
				})
				.catch(() => {
					reply({
					  "temperature": {
					    "tool0": {
					      "actual": 214.8821,
					      "target": 220.0,
					      "offset": 0
					    },
					    "tool1": {
					      "actual": 25.3,
					      "target": null,
					      "offset": 0
					    },
					    "bed": {
					      "actual": 50.221,
					      "target": 70.0,
					      "offset": 5
					    },
					    "history": [
					      {
					        "time": 1395651928,
					        "tool0": {
					          "actual": 214.8821,
					          "target": 220.0
					        },
					        "tool1": {
					          "actual": 25.3,
					          "target": null
					        },
					        "bed": {
					          "actual": 50.221,
					          "target": 70.0
					        }
					      },
					      {
					        "time": 1395651926,
					        "tool0": {
					          "actual": 212.32,
					          "target": 220.0
					        },
					        "tool1": {
					          "actual": 25.1,
					          "target": null
					        },
					        "bed": {
					          "actual": 49.1123,
					          "target": 70.0
					        }
					      }
					    ]
					  },
					  "sd": {
					    "ready": true
					  },
					  "state": {
					    "text": "Operational",
					    "flags": {
					      "operational": true,
					      "paused": false,
					      "printing": false,
					      "sdReady": true,
					      "error": false,
					      "ready": true,
					      "closedOrError": false
					    }
					  }
					}).code(200);
				});
		}
	}
];
