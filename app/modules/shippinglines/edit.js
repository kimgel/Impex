'use strict';

define(['app', 'ShippingLines'], function(app) {
    app.controller('ShippingLineEdit', [
        '$scope',
        '$state',
        '$stateParams',
        'ShippingLinesFactory',
        function($scope, $state, $stateParams, ShippingLinesFactory) {            
            $scope.update = function(form) {          
                ShippingLinesFactory.update($scope.shippingline, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('administration_shippinglines');
                    }
                });
            };

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
