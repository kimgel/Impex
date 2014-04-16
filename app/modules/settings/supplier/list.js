'use strict';

define(['app', './services'], function(app, Services) {
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
