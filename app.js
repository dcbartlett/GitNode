// Setup Config
var config = {}
config.monitor = true;

// Require Monitoring
if (config.monitor = true) {
	var cx = require('concurix-monitor')({
	   accountKey: "b0e46fbeeb62320212c4aa42d0c914b8"
	});
	cx.start();
}

// Require App
var Api      = require('./bin/api');
var Git      = require('./bin/git');
	// Web = require('./bin/web');

// Api.start();
// Web.start();