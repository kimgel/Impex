'use strict';

define(['app'], function(app) {
    app.controller('DashboardCtrl', [
        '$scope',
        'Auth',
        '$location',
        function($scope, Auth,$location) {
        	scope.view = function(){
        		$scope.location = '/initiateimport/planner/view';
        	};
        	
        }
    ]);
});
