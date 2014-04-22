'use strict';

define(['app', 'Brokers'], function(app, Brokers) {
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
