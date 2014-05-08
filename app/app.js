'use strict';

define(['Routes', 'Dependency'],
    function (Routes, Dependency) {
        var app = angular.module('app', [
            'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'mgcrea.ngStrap'
        ]);

        app.config([
            '$routeProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            function (
                $routeProvider,
                $locationProvider,
                $controllerProvider,
                $compileProvider,
                $filterProvider,
                $provide
            ) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;

                $locationProvider.html5Mode(true);

                if (Routes.routes !== undefined) {
                    angular.forEach(Routes.routes, function (route, path) {
                        $routeProvider.when(
                            path, {
                                templateUrl: route.templateUrl,
                                resolve: Dependency(route.dependencies),
                                authenticate: route.authenticate
                            }
                        );
                    });
                }
                if (Routes.defaultRoutePath !== undefined) {
                    $routeProvider.otherwise({
                        redirectTo: Routes.defaultRoutePath
                    });
                }
            }
        ]);

        app.config(function ($httpProvider) {

            var logsOutUserOn401 = [
                '$q', '$location',
                function ($q, $location) {
                    var success = function (response) {
                        return response;
                    };

                    var error = function (response) {
                        if (response.status === 401) {
                            //redirect them back to login page
                            $location.path('/login');

                            return $q.reject(response);
                        } else {
                            return $q.reject(response);
                        }
                    };
                    return function (promise) {
                        return promise.then(success, error);
                    };
                }
            ];

            $httpProvider.responseInterceptors.push(logsOutUserOn401);
        });


        app.run(function ($http, $cookies, $rootScope, $location, Auth) {
            $http.defaults.headers.common['x-csrf-token'] = $cookies._csrf;
            
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                if (next.authenticate && !Auth.isLoggedIn()) {
                    event.preventDefault();
                    $location.path('/login');
                }
            });
        });

        return app;
    });