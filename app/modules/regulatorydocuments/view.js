'use strict';

define(['app', 'RegulatoryDocuments'], function(app, RegulatoryDocuments) {
    app.controller('RegulatoryDocumentView', [
        '$scope',
        '$location',
        '$stateParams',
        'RegulatoryDocsFactory',
        function($scope, $location, $stateParams, RegulatoryDocsFactory) {
            $scope.findOne = function() {
                RegulatoryDocsFactory.get({
                    regulatoryDocumentId: $stateParams.regulatoryDocumentId                 
                }, function(regulatory) {
                    $scope.regulatory = regulatory;                    
                });
            };
        }
    ]);
});
