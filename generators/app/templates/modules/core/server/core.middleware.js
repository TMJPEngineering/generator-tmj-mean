'use strict';

module.exports = function (method) {
    var methods = {
        auth: auth,
        csrf: csrf
    };

    return methods[method]();

    function auth() {
        return function (req, res, next) {
            next();
        }
    }

    function csrf() {
        return function (req, res, next) {
            var token = req.headers['X-XSRF-TOKEN'];

            // verifies secret and checks exp  
            jwt.verify(token, 'MY_SECRET', function (err, decoded) {
                var ip = req.connection.remoteAddress;

                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    }
};
