'use strict';

define(['app'], function(app) {
    app.factory('InitiateImportBrokerFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/broker/:plannerId', {
                plannerId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
