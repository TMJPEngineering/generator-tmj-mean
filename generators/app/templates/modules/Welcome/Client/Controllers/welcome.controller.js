(function () {
    'use strict';

    angular.module('welcome')
        .controller('WelcomeController', WelcomeController);

    WelcomeController.$inject = [];

    /* @ngInject */
    function WelcomeController() {
        var vm = this;
        activate();

        function activate() {}
    }
})();
