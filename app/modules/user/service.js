'use strict';

define(['app'], function(app) {
    app.factory('UsersFactory', [
        '$resource',
        function($resource) {
            return $resource('/api/users/:userId', {
                id: '@_id'
            }, { 
                update: {
                    method: 'PUT',
                    params: {}
                }
            });
        }
    ]);
});
