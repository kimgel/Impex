'use strict';

define(['app', 'Users'], function(app, Users) {
    app.controller('BrokerView', [
        '$scope',
        '$location',
        '$stateParams',
        'UsersFactory',
        function($scope, $location, $stateParams, UsersFactory) {
            $scope.findOne = function() {
                UsersFactory.get({
                    userId: $stateParams.userId                 
                }, function(user) {
                    $scope.user = user;                    
                });
            };
        }
    ]);
});
