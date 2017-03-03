(function () {
    'use strict';

    angular.module('auth')
        .factory('AuthFactory', AuthFactory);
    AuthFactory.$inject = ['$http'];

    function AuthFactory($http) {
        return {
            login: login,
            register: register
        }

        function login(credentials) {
            $http.post('/login', credentials).then(function (res) {
                if (res.data) {
                    window.location.assign('/');
                } else {
                    alert('Invalid credentials');
                }
            });
        }

        function register(data) {
            $http.post('/register', data).then(function(res) {
                if (res.data) {
                    window.location.assign('/');
                } else {
                    alert('Username already exist');
                }
            });
        }
    }
})();
