'use strict';

define(['app', 'RegulatoryDocuments'], function(app, RegulatoryDocuments) {
    app.controller('RegulatoryDocumentEdit', [
        '$scope',
        '$state',
        '$stateParams',
        'RegulatoryDocsFactory',
        function($scope, $state, $stateParams, RegulatoryDocsFactory) {            
            $scope.update = function(form) {        
                RegulatoryDocsFactory.update($scope.regulatory, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('administration_regulatory_docs');
                    }
                });
            };

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
