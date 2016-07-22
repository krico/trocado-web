/*global angular*/
(function (angular) {
    'use strict';
    angular.module('app').controller('ApplicationController', ApplicationController);

    function ApplicationController($log, $rootScope, Dialog, $firebaseObject) {
        var app = this;
        $rootScope.$on('$stateNotFound', onStateNotFound);

        function onStateNotFound(event, unfoundState, fromState, fromParams) {
            $log.debug(unfoundState.to);
            $log.debug(unfoundState.toParams);
            $log.debug(unfoundState.options);
            Dialog.showAlert('State not found "' + unfoundState.to + '"',
                'We are unable to navigate to this state', event);
        }

        if (false) {
            var auth = $firebaseAuth();

            // login with Facebook
            auth.$signInWithPopup("google").then(function (result) {
                console.log("Signed in as:", result.user.uid);
                var ref = firebase.database().ref();

                var obj = $firebaseObject(ref);
                // to take an action after the data loads, use the $loaded() promise
                obj.$loaded().then(function () {
                    console.log("loaded record:", obj.$id);

                    // To iterate the key/value pairs of the object, use angular.forEach()
                    angular.forEach(obj, function (value, key) {
                        console.log(key, value);
                    });
                });

                // To make the data available in the DOM, assign it to $scope
                app.data = obj;
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
        }
    }

}(angular));
