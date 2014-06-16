'use strict';

define(['app', 'RegulatoryDocuments'], function(app) {
    app.controller('RegulatoryDocumentsAdd', [
        '$scope',
        '$state',
        '$upload',
        'RegulatoryDocsFactory',
        function($scope, $state, $upload, RegulatoryDocsFactory) {

            $scope.noFiles = true;
            $scope.fileOkay = false;
            $scope.regulatory = {};
            $scope.regulatory.document_data = {};
            $scope.submit = function(form) {
                RegulatoryDocsFactory.save($scope.regulatory, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    } else {
                        $state.go('administration_regulatory_docs');
                    }
                });
            };

            $scope.clear = function() {
                $scope.regulatory = angular.copy({});
            };

            $scope.onFileSelect = function($files) {
                $scope.upload = $upload.upload({
                    url: '/api/regulatorydocument/file',
                    method: 'POST',
                    file: $files
                }).progress(function() {
                    $scope.noFiles = false;
                    $scope.uploading = true;
                }).success(function(document_data) {
                    // file is uploaded successfully
                    // add object to scope
                    
                    $scope.noFiles = false;
                    $scope.uploading = false;
                    $scope.fileOkay = true;
                    $scope.regulatory.document_data = document_data;
                });
            };

            $scope.resetFileInput = function() {
                document.getElementById('fileUpload').value = null;
            };
        }
    ]);

});
