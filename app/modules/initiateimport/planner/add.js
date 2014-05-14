'use strict';

define([
    'app',
    'Materials',
    'InitiateImportPlanner',
], function(app, Materials, InitiateImportPlanner) {
    app.controller('PlannerCtrl', [
        '$rootScope',
        '$scope',
        '$http',
        '$state',
        '$alert',
        'MaterialsFactory',
        'InitiateImportPlannerFactory',
        function($rootScope, $scope, $http, $state, $alert, MaterialsFactory, InitiateImportPlannerFactory) {

            $scope.planner = {};
            $scope.docs = [];
            $scope.view = false;
            $scope.notFound = false;
            $scope.noMaterial = true;

            $scope.submit = function(form) {    

                if (!$scope.noMaterial) {
                    $scope.planner.material = $scope.material._id;
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
                            $state.go('initiate_import_planner');
                        }
                    });
                } else {
                    $alert({
                        title: 'Error:',
                        content: 'No material is selected.',
                        placement: 'top-right',
                        type: 'danger',
                        show: true,
                        duration: 5
                    });
                }

            };
            $scope.clear = function() {
                $scope.planner = angular.copy({});
            };

            $scope.findMaterial = function(code) {
                $scope.material = '';
                MaterialsFactory.get({
                    materialCode: code,
                    searchCode: true
                }, function(material) {
                    $scope.notFound = false;
                    $scope.noMaterial = false;
                    $scope.material = material;
                    $scope.docs = $scope.material.documents;
                }, function(err) {
                    $scope.notFoundCode = code;
                    $scope.notFound = true;
                });
            };

        }
    ]);
});
