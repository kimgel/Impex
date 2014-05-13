'use strict';

define(['app'], function (app) {
    app.controller('MainSettingsCtrl', [
        '$scope',
        function ($scope) {
            $scope.mastersettingsDd = [
                {
                    "text": "Item",
                    "ui_sref": "settings_master_item"
                },
                {
                    "text": "Broker",
                    "ui_sref": "settings_master_broker"
                },
                {
                    "text": "Supplier",
                    "ui_sref": "settings_master_supplier"
                },
                {
                    "text": "Forwarder",
                    "ui_sref": "settings_master_forwarder"
                }
            ];
        }
    ]);
});