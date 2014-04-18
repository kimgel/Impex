'use strict';

define(['app', './services'], function(app, Services) {
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
