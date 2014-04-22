'use strict';

define(['app'], function(app) {
    app.factory('ItemsFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/item/:itemId', {
                itemId: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
});
