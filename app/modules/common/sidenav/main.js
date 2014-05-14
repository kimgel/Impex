'use strict';

define(['app'], function (app) {
    app.controller('MainNavCtrl', [
        '$scope',
        function ($scope) {
            $scope.initiateimportDd = [
                {
                    "text": "Planner",
                    "ui_sref": "initiateimport_planner"
                },
                {
                    "text": "Broker",
                    "ui_sref": "initiateimport_broker"
                },
                {
                    "text": "Assign Forwarder",
                    "ui_sref": "initiateimport_assignforwarder"
                }
            ];
        }
    ]);
});