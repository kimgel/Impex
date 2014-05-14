'use strict';

define(['app', 'Planners'], function(app, Planners) {
    app.controller('PlannerViewCtrl', [
        '$scope',
        '$stateParams',
        'PlannerFactory',
        function($scope,  $stateParams, PlannerFactory) {
            $scope.findOne = function() {
                PlannerFactory.get({
                    plannerId: $stateParams.plannerId                 
                }, function(planner) {
                    $scope.planner = planner;                    
                });
            };
        }
    ]);
});
