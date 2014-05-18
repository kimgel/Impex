'use strict';

define(['app', 'Suppliers'], function(app, Suppliers) {
    app.controller('SupplierEdit', [
        '$scope',
        '$state',
        '$stateParams',
        'SuppliersFactory',
        function($scope, $state, $stateParams, SuppliersFactory) {            
            $scope.update = function(form) {            
                var updateBroker = $scope.supplier;
                SuppliersFactory.update($scope.supplier, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('settings_supplier');
                    }
                });
            };

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
