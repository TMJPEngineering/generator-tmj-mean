/**
 * Initialize the core module and its dependencies
 * @author TMJP Engineering Team 2016
 */

(function (app) {
    'use strict';

    // start defining the module and its dependencies
    angular.module(app.moduleName, app.moduleSharedDependencies);

    // wait for the document to load before initializing app
    angular.element(document).ready(init);

    // initialize the app
    function init() {
        var config = {
            'element': document,
            'module': app.moduleName,
            'moduleResolves': [
                {
                    // bind the resolve in core modules
                    'module': 'core',
                    'resolve': {}
                }
            ]
        };
        deferredBootstrapper.bootstrap(config);
    }
})(angularAppConfig);
