/*global angular, firebase*/
(function (angular) {
    'use strict';
    angular
        .module('app',
            [
                'ng', 'ngMaterial', 'ui.router', 'firebase',
                'app.constants', 'app.services', 'app.auth', 'app.home'
            ]
        )
        .config(config)
        .run(run);

    function config($mdThemingProvider) {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyAmv9O8nw7yP6JZklfesJEsR_tlv7E4U4Y",
            authDomain: "meus-trocados.firebaseapp.com",
            databaseURL: "https://meus-trocados.firebaseio.com",
            storageBucket: "meus-trocados.appspot.com"
        });

        $mdThemingProvider
            .theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('pink')
            .backgroundPalette('grey');
    }

    function run($log) {
        $log.debug('App initialized!');
    }

}(angular));
