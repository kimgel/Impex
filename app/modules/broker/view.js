'use strict';

define(['app', 'Brokers'], function(app, Brokers) {
    app.controller('BrokerView', [
        '$scope',
        '$location',
        '$stateParams',
        'BrokersFactory',
        function($scope, $location, $stateParams, BrokersFactory) {
            $scope.findOne = function() {
                BrokersFactory.get({
                    brokerId: $stateParams.brokerId                 
                }, function(broker) {
                    $scope.broker = broker;                    
                });
            };
        }
    ]);
});
