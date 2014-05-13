'use strict';

define(['app', 'Forwarders'], function(app, Forwarders) {
    app.controller('ForwarderEdit', [
        '$scope',
        '$state',
        '$stateParams',
        'ForwardersFactory',
        function($scope, $state, $stateParams, ForwardersFactory) {            
            $scope.update = function(form) {          
                ForwardersFactory.update($scope.forwarder, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('settings_forwarder');
                    }
                });
            };

            $scope.findOne = function() {
                ForwardersFactory.get({
                    forwarderId: $stateParams.forwarderId
                }, function(forwarder) {
                    $scope.forwarder = forwarder;
                });
            };
        }
    ]);
});
