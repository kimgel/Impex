'use strict';

define(['app'], function(app) {
    app.factory('SuppliersFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/supplier/:supplierId', {
                supplierId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
