'use strict';

define(['app', 'InitiateImportPlanner'], function(app, InitiateImportPlanner) {
    app.controller('PlannerList', [
        '$scope',
        'InitiateImportPlannerFactory',
        function($scope, InitiateImportPlannerFactory) {
            
            $scope.all = function() {
                InitiateImportPlannerFactory.query(function(planners) {
                    $scope.planners = planners;
                });
            };
        }
    ]);
});
