'use strict';

define(['app', 'Forwarders'], function(app, Forwarders) {
    app.controller('ForwarderEdit', [
        '$scope',
        '$location',
        '$routeParams',
        'ForwardersFactory',
        function($scope, $location, $routeParams, ForwardersFactory) {            
            $scope.update = function(form) {          
                ForwardersFactory.update($scope.forwarder, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $location.path('/settings/forwarder');
                    }
                });
            };

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
