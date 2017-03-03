'use strict';

var express = require('express'),
    app = express();

// Load environment properties from a .env file for local development
require('dotenv').load({ silent: true });

// Views
app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/resources/views'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

require('./config/lib/body-parser')(app);
require('./config/lib/middleware')(app);
require('./config/lib/csrf')(app);
require('./config/lib/handler')(app);
require('./config/lib/mongoose')(app);
require('./config/lib/routes')(app);
require('./config/lib/passport')(app);

module.exports = app;
