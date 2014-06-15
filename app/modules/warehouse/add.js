'use strict';

define(['app', 'Warehouses'], function(app) {
    app.controller('WarehouseAdd', [
        '$scope',
        '$state',
        'WarehouseFactory',
        function($scope, $state, WarehouseFactory) {

            $scope.warehouse = {};
            $scope.submit = function(form) {
                WarehouseFactory.save($scope.warehouse, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('administration_warehouse');
                    }
                });
            };
            $scope.clear = function() {
                $scope.warehouse = angular.copy({});
            };
        }
    ]);

});
