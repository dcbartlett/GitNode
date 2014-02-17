var express = require('express');
GitNode.webServer  = express();

// Require in libraries
GitNode.controllers = require('../lib/controllers');
GitNode.routes = require('../lib/routes')

GitNode.webServer.listen(3100, function() {
	console.log('listening')
});