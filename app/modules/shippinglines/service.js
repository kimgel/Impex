'use strict';

define(['app'], function(app) {
    app.factory('ShippingLinesFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/shippingline/:shippinglineId', {
                shippinglineId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
