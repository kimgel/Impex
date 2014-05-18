'use strict';

define(['app', 'ShippingLines'], function(app, ShippingLines) {
    app.controller('ShippingLinesList', [
        '$scope',
        '$location',
        'ShippingLinesFactory',
        function($scope, $location, ShippingLinesFactory) {
            $scope.all = function() {
                ShippingLinesFactory.query(function(shippinglines) {
                    $scope.shippinglines = shippinglines;
                });
            };
        }
    ]);
});
