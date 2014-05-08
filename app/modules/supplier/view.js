'use strict';

define(['app', 'Suppliers'], function(app, Suppliers) {
    app.controller('SupplierView', [
        '$scope',
        '$location',
        '$stateParams',
        'SuppliersFactory',
        function($scope, $location, $stateParams, SuppliersFactory) {
            $scope.findOne = function() {
                SuppliersFactory.get({
                    supplierId: $stateParams.supplierId                 
                }, function(supplier) {
                    $scope.supplier = supplier;                    
                });
            };
        }
    ]);
});
