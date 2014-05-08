'use strict';

define(['app', 'Brokers'], function(app, Brokers) {
    app.controller('BrokerEdit', [
        '$scope',
        '$location',
        '$stateParams',
        'BrokersFactory',
        function($scope, $location, $stateParams, BrokersFactory) {            
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
                    brokerId: $stateParams.brokerId
                }, function(broker) {
                    $scope.broker = broker;
                });
            };
        }
    ]);
});
