'use strict';

define(['app', 'Items'], function(app, Items) {
    app.controller('ItemList', [
        '$scope',
        '$location',
        'ItemsFactory',
        function($scope, $location, ItemsFactory) {
            $scope.all = function() {
                ItemsFactory.query(function(items) {
                    $scope.items = items;
                });
            };
        }
    ]);
});
