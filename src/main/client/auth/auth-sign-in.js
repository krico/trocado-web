/*global angular, firebase*/
(function (angular) {
    'use strict';
    angular.module('app.auth').controller('AuthSignInController', AuthSignInController);

    function AuthSignInController($log, $state, Auth, Dialog) {
        var vm = this;
        vm.google = google;
        vm.email = email;

        function google() {
            return signInPopUp('google');
        }

        function email() {
            //doesn't work
            return signInPopUp('email');
        }


        function signInPopUp(provider) {
            $log.debug(provider);
            return Auth.signIn(provider).then(signInOk, signInFailed);

            function signInOk(result) {
                $log.debug('Signed in: "' + result.user.displayName + '" <' + result.user.email + '> (' + result.user.uid + ')');
                $state.go('home');
            }

            function signInFailed(error) {
                Dialog.showAlert('Authentication failed', error);
            }
        }
    }

}(angular));
