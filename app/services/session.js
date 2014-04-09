'use strict';

define(['app'], function(app) {
    app.factory('Session', [
        '$resource',
        function($resource) {
            return $resource('/api/session/');
        }
    ]);
    app.controller('LogOutCtrl', [
        '$scope',
        '$location',
        'Auth',
        function($scope, $location, Auth) {
            $scope.logout = function() {
                Auth.logout()
                    .then(function() {
                        $location.path('/login');
                    });
            };
        }
    ]);
});
