'use strict';

define(['app', 'Brokers'], function(app, Brokers) {
    app.controller('BrokerList', [
        '$scope',
        '$location',
        'BrokersFactory',
        function($scope, $location, BrokersFactory) {
            $scope.all = function() {
                BrokersFactory.query(function(brokers) {
                    $scope.brokers = brokers;
                });
            };
        }
    ]);
});
