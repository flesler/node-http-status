// For reference: http://en.wikipedia.org/wiki/HTTP_status

var http = require('http');

function Status(code) {
	this.code = code;
}

Status.prototype = {
	constructor: Status,
	
	// Expose some info
	
	get description() {
		return http.STATUS_CODES[this.code];
	},
	
	// Checks
	
	is: function(code) {
		return this.code === code;
	},
	
	get isInformational() {
		return within(this, 1);
	},
	
	get isSuccess() {
		return within(this, 2);
	},
	
	get isRedirection() {
		return within(this, 3);
	},
	
	get isClientError() {
		return within(this, 4);
	},
	
	get isServerError() {
		return within(this, 5);
	},
	
	get isError() {
		return this.isClientError || this.isServerError;
	},
	
	// Behave like a number
	
	valueOf: function() {
		return this.code;
	},
	
	toString: function() {
		return this.code.toString();
	}
};

function within(status, type) {
	return Math.floor(status.code / 100) === type;
}

module.exports = Status;