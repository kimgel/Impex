'use strict';

define(['app', 'Users'], function(app, Users) {
    app.controller('UserAdd', [
        '$scope',
        '$location',
        'UsersFactory',
        function($scope, $location, UsersFactory) {

            $scope.user = {};
            $scope.submit = function(form) {
            };
            $scope.clear = function() {
                $scope.user = angular.copy({});
            };
        }
    ]);

});
