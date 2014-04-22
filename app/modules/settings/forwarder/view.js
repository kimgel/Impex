'use strict';

define(['app', 'Forwarders'], function(app, Forwarders) {
    app.controller('ForwarderView', [
        '$scope',
        '$location',
        '$routeParams',
        'ForwardersFactory',
        function($scope, $location, $routeParams, ForwardersFactory) {
            $scope.findOne = function() {
                ForwardersFactory.get({
                    forwarderId: $routeParams.forwarderId                 
                }, function(forwarder) {
                    $scope.forwarder = forwarder;                    
                });
            };
        }
    ]);
});
