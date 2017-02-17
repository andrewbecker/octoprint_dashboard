'use strict';
const axios = require('axios');
const _ = require('lodash');

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			axios
				.get()
		}
	}
];
