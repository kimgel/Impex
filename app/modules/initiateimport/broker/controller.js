'use strict';

define(['app'], function(app) {
    app.controller('BrokerCtrl', [
        '$scope',
        '$modal',
        function($scope, $modal) {
            $scope.open = function() {

                var modalInstance = $modal.open({
                    template: 'summary.html'
                });
            };
        }
    ]);
});
