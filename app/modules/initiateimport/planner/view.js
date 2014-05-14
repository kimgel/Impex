'use strict';

define(['app', 'Planners'], function(app, Planners) {
    app.controller('PlannerViewCtrl', [
        '$scope',
        '$location',
        '$stateParams',
        'PlannerFactory',
        function($scope, $location, $stateParams, PlannerFactory) {
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
