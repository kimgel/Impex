'use strict';

define(['app', 'Users'], function(app, Users) {
    app.controller('BrokerView', [
        '$scope',
        '$location',
        '$routeParams',
        'UsersFactory',
        function($scope, $location, $routeParams, UsersFactory) {
            $scope.findOne = function() {
                UsersFactory.get({
                    userId: $routeParams.userId                 
                }, function(user) {
                    $scope.user = user;                    
                });
            };
        }
    ]);
});
