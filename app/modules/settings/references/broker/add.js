'use strict';

define(['app', './services'], function(app, Services) {
    app.controller('BrokerAdd', [
        '$scope',
        '$location',
        'BrokersFactory',
        function($scope, $location, BrokersFactory) {

            $scope.broker = {};

            $scope.submit = function(form) {
                BrokersFactory.save($scope.broker, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $scope.clear();
                    }
                });
            };

            $scope.clear = function() {
                $scope.broker = angular.copy({});
            };
        }
    ]);
});
