'use strict';

define(['app'], function (app) {
    app.controller('LoginCtrl', [
        '$scope',
        '$state',
        'Auth',
        function ($scope, $state, Auth) {
            $scope.user = {};
            $scope.errors = {};
            $scope.login = function (form) {

                $scope.submitted = true;

                if (form.$valid) {
                    Auth.login({
                        username: $scope.user.username,
                        password: $scope.user.password
                    }).then(function () {
                        $state.go('statusboard');
                    }).
                    catch(function (err) {
                        err = err.data;
                        $scope.errors.other = err.message;
                    });
                }
            };
        }
    ]);
});