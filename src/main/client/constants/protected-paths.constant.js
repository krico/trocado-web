/*global angular*/
(function (angular) {
    'use strict';
    /**
     * Protected paths are URL paths that require a user to be authenticated.
     */
    var ProtectedPaths =
        [
            '/home'
        ];
    angular.module('app.constants').constant('ProtectedPaths', ProtectedPaths);

}(angular));
