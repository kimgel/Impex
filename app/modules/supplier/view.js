'use strict';

define(['app', 'Suppliers'], function(app, Suppliers) {
    app.controller('SupplierView', [
        '$scope',
        '$location',
        '$routeParams',
        'SuppliersFactory',
        function($scope, $location, $routeParams, SuppliersFactory) {
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
