'use strict';

define(['app', 'Planners'], function(app, Planners) {
    app.controller('PlannerList', [
        '$scope',
        '$location',
        'PlannerFactory',
        function($scope, $location, PlannerFactory) {
            $scope.all = function() {
                PlannerFactory.query(function(planners) {
                    $scope.planners = planners;
                });
            };
        }
    ]);
});
