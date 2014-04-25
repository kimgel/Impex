'use strict';

define(['app'], function(app) {
    app.factory('UsersFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/users/:id', {
                id: '@id'
            }, { 
                update: {
                    method: 'PUT',
                    params: {}
                }
            });
        }
    ]);
});
