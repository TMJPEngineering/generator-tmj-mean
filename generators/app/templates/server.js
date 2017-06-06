'use strict';

var app = require('./app.js'),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    port = process.env.NODE_PORT || 3000;

io.on('connection', function(socket) {
    // TODO: Socket
});

server.listen(port, function () {
    console.log('Node development server started on ' + app.ENV.NODE_URL);
});
