'use strict';

define(['app', 'Suppliers'], function(app, Suppliers) {
    app.controller('SupplierAdd', [
        '$scope',
        '$location',
        'SuppliersFactory',
        function($scope, $location, SuppliersFactory) {

            $scope.supplier = {};
            $scope.submit = function(form) {
                SuppliersFactory.save($scope.supplier, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $location.path('/settings/supplier');
                    }
                });
            };
            $scope.clear = function() {
                $scope.supplier = angular.copy({});
            };
        }
    ]);

});
