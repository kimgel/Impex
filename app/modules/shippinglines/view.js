'use strict';

define(['app', 'ShippingLines'], function(app, ShippingLines) {
    app.controller('ShippingLineView', [
        '$scope',
        '$location',
        '$stateParams',
        'ShippingLinesFactory',
        function($scope, $location, $stateParams, ShippingLinesFactory) {
            $scope.findOne = function() {
                ShippingLinesFactory.get({
                    shippinglineId: $stateParams.shippinglineId                 
                }, function(shippingline) {
                    $scope.shippingline = shippingline;                    
                });
            };
        }
    ]);
});
