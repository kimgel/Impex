'use strict';

define(['app', 'Suppliers'], function(app, Suppliers) {
    app.controller('SupplierAdd', [
        '$scope',
        '$state',
        'SuppliersFactory',
        function($scope, $state, SuppliersFactory) {

            $scope.supplier = {};
            $scope.submit = function(form) {
                SuppliersFactory.save($scope.supplier, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('administration_supplier');
                    }
                });
            };
            $scope.clear = function() {
                $scope.supplier = angular.copy({});
            };
        }
    ]);

});
