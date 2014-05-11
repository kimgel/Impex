'use strict';

define(['app'], function (app) {
    app.controller('LoginCtrl', [
        '$scope',
        '$state',
        '$location',
        '$http',
        'Auth',
        function ($scope, $state, $location, $http, Auth) {
            $scope.user = {};
            $scope.errors = {};
            $scope.login = function (form) {

                $scope.submitted = true;

                if (form.$valid) {
                    Auth.login({
                        username: $scope.user.username,
                        password: $scope.user.password
                    }).then(function () {

                        $state.go('statusboard', null, { reload: true });
                    }).
                    catch(function (err) {
                        err = err.data;
                        $scope.errors.other = err.message;
                    });
                }
            };

            $scope.checkState = function () {
                if (Auth.isLoggedIn()) {
                    $state.go('statusboard', null, { reload: true });
                }
            };
        }
    ]);
});