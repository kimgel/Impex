'use strict';

define(['app', 'Materials'], function(app, Materials) {
    app.controller('ItemView', [
        '$scope',
        '$location',
        '$stateParams',
        'MaterialsFactory',
        function($scope, $location, $stateParams, MaterialsFactory) {
            $scope.docs = [];
            $scope.view = true;
            $scope.findOne = function() {
                MaterialsFactory.get({
                    materialId: $stateParams.materialId                 
                }, function(material) {
                    $scope.material = material;      
                    $scope.docs = $scope.material.documents;
                    $scope.schedule = $scope.material.schedule;                
                });
            };
        }
    ]);
});
