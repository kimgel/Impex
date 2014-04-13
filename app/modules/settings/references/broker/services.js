'use strict';

define(['app'], function(app) {
    app.factory('BrokersFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/broker/:brokerId', {
                brokerId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
