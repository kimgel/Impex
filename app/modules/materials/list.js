'use strict';

define(['app', 'Materials'], function(app, Materials) {
    app.controller('MaterialList', [
        '$scope',
        '$location',
        'MaterialsFactory',
        function($scope, $location, MaterialsFactory) {
            $scope.all = function() {
                MaterialsFactory.query(function(items) {
                    $scope.items = items;
                });
            };
        }
    ]);
});
