'use strict';

module.exports = function (method) {
    var methods = {
        protect: protect
    };

    return methods[method]();

    function protect() {
        return function (req, res, next) {
            if ( !! req.session.passport && !! req.session.passport.user ) {
                return next();
            }

            res.redirect('/login');
            return;
        }
    }
};
