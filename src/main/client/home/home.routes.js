/*global angular*/
(function (angular) {
    'use strict';
    angular.module('app.home').config(authRoutes);

    function authRoutes($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html',
                controller: 'HomeController as vm',
                resolve: {
                    currentAuth: function (Auth) {
                        return Auth.requireAuth();
                    }
                }
            })
        ;
    }

    function authRun($rootScope, $state, Auth) {
        Auth.onAuthStateChanged(changed);

        function changed(authData) {
            if (!authData && Auth.isProtectedPath($location.path())) {
                Auth.logout();
                $state.go('auth.signIn');
            }
        }

        $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
            if (error === "AUTH_REQUIRED") {
                $state.go("auth.signIn");
            }
        });

    }
}(angular));
