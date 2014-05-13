'use strict';

define(['app', 'Brokers'], function(app, Brokers) {
    app.controller('BrokerEdit', [
        '$scope',
        '$state',
        '$stateParams',
        'BrokersFactory',
        function($scope, $state, $stateParams, BrokersFactory) {            
            $scope.update = function(form) {       
                BrokersFactory.update($scope.broker, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        state.go('settings_broker');
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
