'use strict';

define(['app'], function (app) {
    app.controller('MainNavCtrl', [
        '$scope',
        function ($scope) {
            $scope.initiateimportDd = [
                {
                    "text": "Planner",
                    "ui_sref": "initiate_import_planner"
                }
            ];
        }
    ]);
});