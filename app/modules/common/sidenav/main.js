'use strict';

define(['app'], function (app) {
    app.controller('MainNavCtrl', [
        '$scope',
        function ($scope) {
            $scope.initiateimportDd = [
                {
                    "text": "Planner",
                    "ui_sref": "initiate_import_planner"
                },
                {
                    "text": "Broker",
                    "ui_sref": "initiate_import_broker"
                },
                {
                    "text": "Assign Forwarder",
                    "ui_sref": "initiate_import_assignforwarder"
                }
            ];
        }
    ]);
});