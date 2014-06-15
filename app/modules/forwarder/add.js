'use strict';

define(['app', 'Forwarders'], function(app) {
    app.controller('ForwarderAdd', [
        '$scope',
        '$state',
        'ForwardersFactory',
        function($scope, $state, ForwardersFactory) {

            $scope.forwarder = {};
            $scope.submit = function(form) {
                ForwardersFactory.save($scope.forwarder, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('administration_forwarder');
                    }
                });
            };
            $scope.clear = function() {
                $scope.forwarder = angular.copy({});
            };
        }
    ]);

});
