'use strict';

define(['app', 'RegulatoryDocuments'], function(app, RegulatoryDocuments) {
    app.controller('RegulatoryDocumentsList', [
        '$scope',
        '$location',
        'RegulatoryDocsFactory',
        function($scope, $location, RegulatoryDocsFactory) {
            $scope.all = function() {
                RegulatoryDocsFactory.query(function(regulatories) {
                    $scope.regulatories = regulatories;
                });
            };
        }
    ]);
});
