'use strict';

define(['app'], function(app) {
    app.factory('MaterialsFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/material/:materialId', {
                materialId: '@_id'                
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
