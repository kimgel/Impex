'use strict';

define(['app'], function (app) {
    app.controller('LoginCtrl', [
        '$scope',
        '$location',
        'Auth',        
        function ($scope, $location, Auth) {
            $scope.user = {};
            $scope.errors = {};
            $scope.login = function (form) {

                $scope.submitted = true;

                if (form.$valid) {
                    Auth.login({
                        username: $scope.user.username,
                        password: $scope.user.password
                    }).then(function () {
                        // Logged in, redirect to home
                        $location.path('/');
                    }).
                    catch(function (err) {
                        err = err.data;
                        $scope.errors.other = err.message;
                    });
                }
            };

            $scope.checkState = function () {
                if (Auth.isLoggedIn()) {
                    $location.path('/');
                }
            };
        }
    ]);
});