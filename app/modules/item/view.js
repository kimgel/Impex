'use strict';

define(['app', 'Items'], function(app, Items) {
    app.controller('ItemView', [
        '$scope',
        '$location',
        '$routeParams',
        'ItemsFactory',
        function($scope, $location, $routeParams, ItemsFactory) {
            $scope.docs = [];
            $scope.view = true;
            $scope.findOne = function() {
                ItemsFactory.get({
                    itemId: $routeParams.itemId                 
                }, function(item) {
                    $scope.item = item;      
                    $scope.docs = $scope.item.documents;              
                });
            };
        }
    ]);
});
