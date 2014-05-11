'use strict';

define(['app'], function (app) {
    app.controller('LogOutCtrl', [
        '$scope',
        '$state',
        '$location',
        'Auth',
        function ($scope, $state, $location, Auth) {
            $scope.logout = function () {
                Auth.logout()
                    .then(function () {
                        $state.go('login', null, {
                            reload: true
                        });
                    });
            };
        }
    ]);
});