/**
 * Adding a configuration before the angular initialized
 * @author TMJP Engineering Team 2016
 */

(function (window) {
    'use strict';

    var resolve = {
        CORE_CONFIG: coreConfig
    };

    coreConfig.$inject = ['$http'];

    function coreConfig($http) {
        return $http.get('config').then(function (response) {
            // return response;
        }, function (err) {
            return err;
        });
    }

    window.angularAppConfig.resolve = resolve;
}(window));
