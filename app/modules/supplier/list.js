'use strict';

define(['app', 'Suppliers'], function(app) {
    app.controller('SupplierList', [
        '$scope',
        '$location',
        'SuppliersFactory',
        function($scope, $location, SuppliersFactory) {
            $scope.all = function() {
                SuppliersFactory.query(function(suppliers) {
                    $scope.suppliers = suppliers;
                });
            };
        }
    ]);
});
