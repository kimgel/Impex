'use strict';

define(['app', './services'], function(app, Services) {
    app.controller('BrokerEdit', [
        '$scope',
        '$location',
        '$routeParams',
        'BrokersFactory',
        function($scope, $location, $routeParams, BrokersFactory) {            
            $scope.update = function(form) {            
                var updateBroker = $scope.broker;
                console.log(updateBroker);
                /*
                BrokersFactory.update($scope.broker, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        //$location.path('/settings/broker');
                        console.log('ok')
                    }
                });
                */
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
