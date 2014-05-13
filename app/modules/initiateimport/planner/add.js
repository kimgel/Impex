'use strict';

define([
    'app',
    'Items',
    'InitiateImportPlanner',
], function(app, Items, InitiateImportPlanner) {
    app.controller('PlannerCtrl', [
        '$rootScope',
        '$scope',
        '$http',
        '$location',
        'ItemsFactory',
        'InitiateImportPlannerFactory',
        function($rootScope, $scope, $http, $location, ItemsFactory, InitiateImportPlannerFactory) {

            $scope.planner = {};
            $scope.selectedItemCode = '';
            $scope.docs = [];
            $scope.view = false;

            $scope.submit = function(form) {
                $scope.planner.item = $scope.selectedItemCode;

                InitiateImportPlannerFactory.save($scope.planner, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            if (key != 'documents') {
                                form[key].message = err.errors[key].message;
                            } else {
                                $scope.docError = err.errors['documents'].message;
                            }
                        }
                    } else {
                        $location.path('/initiateimport/planner');
                    }
                });
            };
            $scope.clear = function() {
                $scope.planner = angular.copy({});
            };

            $scope.getItemCode = function(viewValue) {
                var params = {
                    code: viewValue
                };
                return $http.get('/api/item')
                    .then(function(res) {
                        return res.data;
                    });
            };
            $scope.findOne = function() {
                ItemsFactory.get({
                    itemId: $scope.selectedItemCode
                }, function(item) {
                    $scope.item = item;
                    $scope.docs = $scope.item.documents;
                });
            };
        }
    ]);
});
