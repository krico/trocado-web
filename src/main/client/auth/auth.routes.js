/*global angular*/
(function (angular) {
    'use strict';
    angular.module('app.auth').config(authRoutes).run(authRun);

    function authRoutes($stateProvider) {
        $stateProvider
            .state('auth', {
                url: '/auth',
                abstract: true,
                templateUrl: 'auth/auth.html'
            })
            .state('auth.signIn', {
                url: '/signIn',
                templateUrl: 'auth/auth-sign-in.html',
                controller: 'AuthSignInController as vm'
            })
        ;
    }

    function authRun($rootScope, $state, $location, Auth) {
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
