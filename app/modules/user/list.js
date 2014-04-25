'use strict';

define(['app', 'Users'], function(app, Users) {
    app.controller('UserList', [
        '$scope',
        '$location',
        'UsersFactory',
        function($scope, $location, UsersFactory) {
            $scope.all = function() {
                UsersFactory.query(function(users) {
                    $scope.users = users;
                });
            };
        }
    ]);
});
