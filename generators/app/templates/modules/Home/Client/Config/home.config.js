/**
 * @author TMJP Web Development Team
 * @copyright 2016
 */

(function () {
    'use strict';

    angular.module('home')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'nav': { templateUrl: 'views/layouts/nav.html' },
                    'content': {
                        templateUrl: 'views/web/home.html',
                        controller: 'HomeController',
                        controllerAs: 'hc',
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();
