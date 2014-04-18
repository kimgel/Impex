'use strict';

define(['app', './services'], function(app, Services) {
    app.controller('ForwarderList', [
        '$scope',
        '$location',
        'ForwardersFactory',
        function($scope, $location, ForwardersFactory) {
            $scope.all = function() {
                ForwardersFactory.query(function(forwarders) {
                    $scope.forwarders = forwarders;
                });
            };
        }
    ]);
});
