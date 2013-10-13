var assert =  require('assert');
var expect = require(expect.js);

var events = require('../routes/events');

describe('events', function() {
	it('should expose a function', function() {
		expect(events.findAll).to.be.a('function');
	});
});