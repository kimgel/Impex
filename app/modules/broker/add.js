'use strict';

define(['app', 'Brokers'], function(app, Brokers) {
    app.controller('BrokerAdd', [
        '$scope',
        '$state',
        'BrokersFactory',
        function($scope, $state, BrokersFactory) {

            $scope.broker = {};
            $scope.submit = function(form) {
                BrokersFactory.save($scope.broker, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('settings_master_broker');
                    }
                });
            };
            $scope.clear = function() {
                $scope.broker = angular.copy({});
            };
        }
    ]);

});
