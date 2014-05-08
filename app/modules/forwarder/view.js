'use strict';

define(['app', 'Forwarders'], function(app, Forwarders) {
    app.controller('ForwarderView', [
        '$scope',
        '$location',
        '$stateParams',
        'ForwardersFactory',
        function($scope, $location, $stateParams, ForwardersFactory) {
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
