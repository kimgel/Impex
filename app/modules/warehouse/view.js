'use strict';

define(['app', 'Warehouses'], function(app) {
    app.controller('WarehouseView', [
        '$scope',
        '$location',
        '$stateParams',
        'WarehouseFactory',
        function($scope, $location, $stateParams, WarehouseFactory) {
            $scope.findOne = function() {
                WarehouseFactory.get({
                    warehouseId: $stateParams.warehouseId
                }, function(warehouse) {
                    $scope.warehouse = warehouse;
                });
            };
        }
    ]);
});
