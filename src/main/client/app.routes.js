/*global angular*/
(function (angular) {
    'use strict';
    angular.module('app').config(appRoutes);

    function appRoutes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/home');
    }
}(angular));
