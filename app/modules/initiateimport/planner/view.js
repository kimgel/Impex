'use strict';

define(['app', 'InitiateImportPlanner'], function(app, InitiateImportPlanner) {
    app.controller('PlannerViewCtrl', [
        '$scope',
        '$stateParams',
        'InitiateImportPlannerFactory',
        function($scope,  $stateParams, InitiateImportPlannerFactory) {
            $scope.findOne = function() {
                InitiateImportPlannerFactory.get({
                    plannerId: $stateParams.plannerId                 
                }, function(planner) {
                    $scope.planner = planner;                    
                });
            };
        }
    ]);
});
