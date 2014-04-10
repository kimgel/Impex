'use strict';

define(['app'], function(app) {
    app.factory('BrokersFactory', function($resource) {
        return $resource('/api/broker', {}, {
            query: {
                method: 'GET',
                isArray: true
            },
            create: {
                method: 'POST'
            }
        })
    });
});
