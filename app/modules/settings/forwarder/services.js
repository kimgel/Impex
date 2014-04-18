'use strict';

define(['app'], function(app) {
    app.factory('ForwardersFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/forwarder/:forwarderId', {
                forwarderId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
