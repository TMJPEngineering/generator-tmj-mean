(function () {
    'use strict';

    angular.module('auth')
        .controller('AuthController', AuthController);
    AuthController.$inject = ['AuthFactory'];

    function AuthController(AuthFactory) {
        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.login = login;
        vm.register = register;

        function login() {
            AuthFactory.login({ username: vm.username, password: vm.password });
        }

        function register() {
            AuthFactory.register({ username: vm.username, password: vm.password });
        }
    }
})();
