// Setup Global NameSpace
GitNode = {};

// Read in Config
GitNode.config = {}
GitNode.config.monitor = true;

// Setup Monitoring
if (GitNode.config.monitor = true) {
	var cx = require('concurix-monitor')({
	   accountKey: "b0e46fbeeb62320212c4aa42d0c914b8"
	});
	cx.start();
}

// Start application parts
var Web      = require('./bin/web');
var Git      = require('./bin/git');

// Api.start();
// Web.start();