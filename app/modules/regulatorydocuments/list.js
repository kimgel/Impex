'use strict';

define(['app', 'RegulatoryDocuments'], function(app) {
    app.controller('RegulatoryDocumentsList', [
        '$scope',
        '$location',
        'RegulatoryDocsFactory',
        function($scope, $location, RegulatoryDocsFactory) {
            $scope.all = function() {
                RegulatoryDocsFactory.query({
                    select: "name,valid_until,document_no,date_issued"
                },function(regulatories) {
                    $scope.regulatories = regulatories;
                });
            };
        }
    ]);
});
