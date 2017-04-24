'use strict';

var express = require('express'),
    ENV = require('node-env-file')(__dirname + '/.env'),
    app = express();

// Load environment properties from a .env file for local development
app.ENV = ENV;

// Views
app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/resources/views'));

require('./config/lib/helpers');
require('./config/lib/body-parser')(app);
require('./config/lib/middleware')(app);
require('./config/lib/csrf')(app);
require('./config/lib/handler')(app);
require('./config/lib/mongoose')(app);
require('./config/lib/routes')(app);
require('./config/lib/passport')(app);

module.exports = app;
