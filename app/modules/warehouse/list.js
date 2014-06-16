'use strict';

define(['app', 'Warehouses'], function(app) {
    app.controller('WarehouseList', [
        '$scope',
        '$location',
        'WarehouseFactory',
        function($scope, $location, WarehouseFactory) {
            $scope.all = function() {
                WarehouseFactory.query(function(warehouses) {
                    $scope.warehouses = warehouses;
                });
            };
        }
    ]);
});
