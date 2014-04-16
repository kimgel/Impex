'use strict';

define(['app', './services'], function(app, Services) {
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
