'use strict';

define(['app', 'InitiateImportPlanner'], function(app, InitiateImportPlanner) {
    app.controller('PlannerList', [
        '$scope',
        '$location',
        'InitiateImportPlannerFactory',
        function($scope, $location, InitiateImportPlannerFactory) {
            
            $scope.all = function() {
                InitiateImportPlannerFactory.query(function(planners) {
                    $scope.planners = planners;
                });
            };
        }
    ]);
});
