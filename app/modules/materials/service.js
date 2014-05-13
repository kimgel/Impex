'use strict';

define(['app'], function(app) {
    app.factory('MaterialsFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/material/:materialId', {
                itemId: '@_id'                
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
