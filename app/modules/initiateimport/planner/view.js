'use strict';

define(['app'], function(app) {
    app.controller('PlannerViewCtrl', [
        '$scope',
        '$upload',
        'Auth',
        function($scope, $upload, Auth) {

            // File upload
            $scope.onFileSelect = function($files) {
                for (var i = 0; i < $files.length; i++) {
                    var $file = $files[i];
                    $upload.upload({
                        url: '/api/files',
                        file: $file,
                        headers: {
                            'method': 'POST',
                            'enctype': 'multipart/form-data'
                        }
                    }).progress(function(evt) {
                        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                    }).success(function(data, status, headers, config) {
                        // file is uploaded successfully
                        console.log(data);
                    });
                }
            };
        }
    ]);
    app.controller('DatePicker', [
        '$scope',
        function($scope) {

            // date
            $scope.today = function(){
                $scope.today();
            };
            
            
            $scope.showWeeks = false;
            $scope.showButtonBar = false;
            $scope.dateFormat = 'dd-MMMM-yyyy';
            $scope.dateOptions = {
                'year-format': "'yy'",
                'starting-day': 0
            };
            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.opened = true;
            };
        }
    ]);
});
