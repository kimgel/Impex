'use strict';

define(['app'], function(app) {
    app.factory('PlannerFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/planner/:plannerId', {
                plannerId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
