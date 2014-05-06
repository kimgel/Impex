'use strict';

define([
    'app',
    'Items',
    'Planners',
], function(app, Items, Planners) {
    app.controller('PlannerCtrl', [
        '$rootScope',
        '$scope',
        '$http',
        '$location',
        'ItemsFactory',
        'PlannerFactory',
        function($rootScope, $scope, $http, $location, ItemsFactory, PlannerFactory) {

            $scope.planner = {};
            $scope.selectedItemCode = '';
            $scope.docs = [];
            $scope.view = false;

            $scope.submit = function(form) {
                $scope.planner.item = $scope.selectedItemCode;

                PlannerFactory.save($scope.planner, function(err) {
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
