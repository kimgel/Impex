'use strict';

define(['app'], function(app) {
    app.factory('MaterialsFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/material/:materialId:materialCode', {
                materialId: '@_id',
                materialCode: '@code'            
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
