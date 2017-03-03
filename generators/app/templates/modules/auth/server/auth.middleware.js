'use strict';

module.exports = function (method) {
    var methods = {
        protected: protected
    };

    return methods[method]();

    function protected() {
        return function (req, res, next) {
            if ( !! req.session.passport && !! req.session.passport.user ) {
                return next();
            }

            res.redirect('/login');
        }
    }
};
