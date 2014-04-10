'use strict';

define(['app','./services'], function(app,Services) {
        app.controller('BrokerAdd', [
            '$scope',
            '$location',
            'BrokersFactory',
            function($scope, $location, BrokersFactory) {

                $scope.broker = {};

                $scope.submit = function(form) {
                    BrokersFactory.create($scope.broker);
                    console.log($scope.broker);
                }
            }
        ]);
});
