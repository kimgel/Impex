'use strict';

define(['app', 'Items'], function(app, Items) {
    app.controller('ItemView', [
        '$scope',
        '$location',
        '$stateParams',
        'ItemsFactory',
        function($scope, $location, $stateParams, ItemsFactory) {
            $scope.docs = [];
            $scope.view = true;
            $scope.findOne = function() {
                ItemsFactory.get({
                    itemId: $stateParams.itemId                 
                }, function(item) {
                    $scope.item = item;      
                    $scope.docs = $scope.item.documents;
                    $scope.schedule = $scope.item.schedule;                
                });
            };
        }
    ]);
});
