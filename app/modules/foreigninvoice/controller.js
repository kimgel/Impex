'use strict';

define(['app'], function(app) {
    app.controller('ForeignInvoiceCtrl', [
        '$scope',
        'Auth',
        function($scope, Auth) {

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
