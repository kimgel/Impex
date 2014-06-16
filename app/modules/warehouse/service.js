'use strict';

define(['app'], function(app) {
    app.factory('WarehouseFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/warehouse/:warehouseId', {
                warehouseId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
