'use strict';

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');
const nock = require('nock');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const beforeEach = lab.beforeEach;
const afterEach = lab.afterEach;

const server = require('../server/server.js').createServer(3000);

// beforeEach(function(done) {
// 	nock.cleanAll();

// 	nock('http://m.lowes.com:80')
// 		.get('/CatalogServices/product/nvalue/v1_0')
// 		.query({"nValue":"4294857975","maxResults":"20","showURL":"1","rollUpVariants":"1","showUrl":"true","storeNumber":"0595","priceFlag":"rangeBalance","showMarketingBullets":"1"})

// 	done();
// });

describe('server stuff', () => {

	
});
