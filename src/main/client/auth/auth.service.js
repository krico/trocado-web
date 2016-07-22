/*global angular*/
(function (angular) {
    'use strict';
    angular.module('app.auth').service('Auth', Auth);

    function Auth($firebaseAuth, ProtectedPaths) {
        this.auth = $firebaseAuth();
        this.protectedPaths = ProtectedPaths;
    }

    /**
     * For router resolve to get auth data
     * @returns {*} a promise that resolves when auth data is available
     */
    Auth.prototype.waitForAuth = function () {
        return this.auth.$waitForSignIn();
    };

    /**
     * For router resolve to require auth data
     * @returns {*} a promise that resolves when user is authed, or rejects if not
     */
    Auth.prototype.requireAuth = function () {
        return this.auth.$requireSignIn();
    };

    Auth.prototype.isLoggedIn = function () {
        return this.auth.$getAuth();
    };

    Auth.prototype.logout = function () {
        this.auth.$signOut();
    };

    Auth.prototype.isProtectedPath = function (path) {
        return this.protectedPaths.indexOf(path) !== -1;
    };

    Auth.prototype.onAuthStateChanged = function (func) {
        if (!angular.isFunction(func)) func = angular.noop;
        this.auth.$onAuthStateChanged(func);
    };

    Auth.prototype.signIn = function (provider) {
        return this.auth.$signInWithPopup(provider);
    };

}(angular));
