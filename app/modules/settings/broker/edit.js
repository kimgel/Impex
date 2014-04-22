'use strict';

define(['app', 'Brokers'], function(app, Brokers) {
    app.controller('BrokerEdit', [
        '$scope',
        '$location',
        '$routeParams',
        'BrokersFactory',
        function($scope, $location, $routeParams, BrokersFactory) {            
            $scope.update = function(form) {       
                BrokersFactory.update($scope.broker, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $location.path('/settings/broker');
                    }
                });
            };

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
