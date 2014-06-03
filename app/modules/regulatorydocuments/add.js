'use strict';

define(['app', 'RegulatoryDocuments'], function(app, RegulatoryDocuments) {
    app.controller('RegulatoryDocumentsAdd', [
        '$scope',
        '$state',
        '$upload',
        'RegulatoryDocsFactory',
        function($scope, $state, $upload, RegulatoryDocsFactory) {

            $scope.noFiles = true;
            $scope.fileOkay = false;
            $scope.uploadDisabled = true;
            $scope.regulatory = {};
            $scope.regulatory.document_data = {};
            $scope.submit = function(form) {
                RegulatoryDocsFactory.save($scope.regulatory, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    } else {
                        $state.go('settings_regulatory_docs');
                    }
                });
            };

            $scope.clear = function() {
                $scope.regulatory = angular.copy({});
            };

            $scope.onFileSelect = function($files) {
                $scope.selectedFiles = [];
                $scope.selectedFiles = $files;
                $scope.uploadDisabled = false;
            };

            $scope.startUpload = function() {
                $scope.upload = $upload.upload({
                    url: '/api/regulatorydocuments/file',
                    method: 'POST',
                    file: $scope.selectedFiles,
                }).progress(function(evt) {
                    $scope.noFiles = false;
                    $scope.uploading = true;
                    $scope.uploadDisabled = true; 
                }).success(function(document_data, status, headers, config) {
                    // file is uploaded successfully
                    // add object to scope
                    
                    $scope.noFiles = false;
                    $scope.uploading = false;
                    $scope.fileOkay = true;  
                    $scope.uploadDisabled = true;                 
                    $scope.regulatory.document_data = document_data;

                    document.getElementById('file').value = null;

                });
            };

            $scope.resetFileInput = function() {
                document.getElementById('file').value = null;
            };
        }
    ]);

});
