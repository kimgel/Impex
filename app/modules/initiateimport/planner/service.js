'use strict';

define(['app'], function(app) {
    app.factory('InitiateImportPlannerFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/initiateimport/planner/:plannerId', {
                plannerId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
