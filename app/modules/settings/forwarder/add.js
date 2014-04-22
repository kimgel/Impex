'use strict';

define(['app', 'Forwarders'], function(app, Forwarders) {
    app.controller('ForwarderAdd', [
        '$scope',
        '$location',
        'ForwardersFactory',
        function($scope, $location, ForwardersFactory) {

            $scope.forwarder = {};
            $scope.submit = function(form) {
                ForwardersFactory.save($scope.forwarder, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $location.path('/settings/forwarder');
                    }
                });
            };
            $scope.clear = function() {
                $scope.forwarder = angular.copy({});
            };
        }
    ]);

});
