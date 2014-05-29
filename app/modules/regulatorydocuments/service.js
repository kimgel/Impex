'use strict';

define(['app'], function(app) {
    app.factory('RegulatoryDocsFactory', [
        '$resource',
        function($resource) {
            return $resource(
                '/api/regulatorydocuments/data/:regulatoryDocumentId', {
                    regulatoryDocumentId: '@_id'
                }, {
                    update: {
                        method: 'PUT'
                    }
                }
            );
        }
    ]);
});
