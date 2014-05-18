'use strict';

define(['app'], function(app) {
    app.factory('ShippingLinesFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/shippinglines/:shippinglineId', {
                shippinglineId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
