'use strict';

var express = require('express'),
    ENV = require('node-env-file')(__dirname + '/.env'), // Load .env in the root directory of the this project
    app = express();

// Get environment properties from a .env file for local development
app.ENV = ENV;
// Get port in .env or else use default port `3000`
app.ENV.NODE_PORT = app.ENV.NODE_PORT || 3000;

// If the development is for testing purpose or development. Use 'local'
if (app.ENV.NODE_DEVELOPMENT === 'local') {
    app.ENV.NODE_URL += ':' + app.ENV.NODE_PORT;
}

// Gzip compression
require('./config/lib/compress')(app);

// Libraries for client-side
app.use('/bower_components', express.static(__dirname + '/bower_components'));
// Assets
app.use('/public', express.static(__dirname + '/public'));
// HTML Files
app.use('/views', express.static(__dirname + '/resources/views'));

// Helpers that can be use globally in the server
require('./config/lib/helpers');
// This library uses req.body for requests like POST method, etc.
require('./config/lib/body-parser')(app);
// This library uses for security purposes like session, crsf, passport, and helmet.
require('./config/lib/middleware')(app);
// Set csrf token in cookie
require('./config/lib/csrf')(app);
// Centralized error handler
require('./config/lib/handler')(app);
// Database configuration
require('./config/lib/mongoose')(app);
// Set of routes in an application
require('./config/lib/routes')(app);
// Passport configuration
require('./config/lib/passport')(app);

module.exports = app;
