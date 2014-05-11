'use strict';

define(['app'], function(app) {
    app.factory('Session', [
        '$http',
        '$resource',
        function($http, $resource) {
            return $resource('/api/session/');
        }
    ]);
});
