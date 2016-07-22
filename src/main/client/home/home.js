/*global angular*/
(function (angular) {
    'use strict';
    angular.module('app.auth').controller('HomeController', HomeController);

    function HomeController(Auth, currentAuth) {
        var vm = this;
        vm.logout = logout;
        vm.currentAuth = currentAuth;

        function logout() {
            Auth.logout();
        }
    }

}(angular));
