'use strict';

define(['app', './services'], function(app, Services) {
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
