'use strict';

define(['app', 'ShippingLines'], function(app) {
    app.controller('ShippingLinesAdd', [
        '$scope',
        '$state',
        'ShippingLinesFactory',
        function($scope, $state, ShippingLinesFactory) {

            $scope.shippingline = {};
            $scope.submit = function(form) {
                ShippingLinesFactory.save($scope.shippingline, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('administration_shippinglines');
                    }
                });
            };
            $scope.clear = function() {
                $scope.shippingline = angular.copy({});
            };
        }
    ]);

});
