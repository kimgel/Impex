'use strict';

define(['app', './services'], function(app, Services) {
    app.controller('BrokerView', [
        '$scope',
        '$location',
        '$routeParams',
        'BrokersFactory',
        function($scope, $location, $routeParams, BrokersFactory) {
            $scope.findOne = function() {
                BrokersFactory.get({
                    brokerId: $routeParams.brokerId                 
                }, function(broker) {
                    $scope.broker = broker;                    
                });
            };
        }
    ]);
});
