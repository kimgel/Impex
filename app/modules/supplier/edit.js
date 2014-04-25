'use strict';

define(['app', 'Suppliers'], function(app, Suppliers) {
    app.controller('SupplierEdit', [
        '$scope',
        '$location',
        '$routeParams',
        'SuppliersFactory',
        function($scope, $location, $routeParams, SuppliersFactory) {            
            $scope.update = function(form) {            
                var updateBroker = $scope.supplier;
                SuppliersFactory.update($scope.supplier, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $location.path('/settings/supplier');
                    }
                });
            };

            $scope.findOne = function() {
                SuppliersFactory.get({
                    supplierId: $routeParams.supplierId
                }, function(supplier) {
                    $scope.supplier = supplier;
                });
            };
        }
    ]);
});
