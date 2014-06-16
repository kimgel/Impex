'use strict';

define(['app', 'Warehouses'], function(app) {
    app.controller('WarehouseEdit', [
        '$scope',
        '$state',
        '$stateParams',
        'WarehouseFactory',
        function($scope, $state, $stateParams, WarehouseFactory) {            
            $scope.update = function(form) {
                WarehouseFactory.update($scope.warehouse, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('administration_warehouse');
                    }
                });
            };

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
