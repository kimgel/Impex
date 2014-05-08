'use strict';

define(['Routes', 'Dependency'],
    function (Routes, Dependency) {
        var app = angular.module('app', [
            'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'mgcrea.ngStrap'
        ]);

        app.config([
            '$routeProvider',
            '$httpProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            function (
                $routeProvider,
                $httpProvider,
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

                var interceptor = ['$q', '$location', '$rootScope',
                    function ($q, $location, $rootScope) {
                        function success(response) {
                            return response;
                        }

                        function error(response) {
                            var status = response.status;
                            if (status == 401) {
                                $location.path('/login');
                            }
                            return $q.reject(response);
                        }

                        return function (promise) {
                            return promise.then(success, error);
                        }
                    }
                ];
                $httpProvider.responseInterceptors.push(interceptor);


                if (Routes.routes !== undefined) {
                    angular.forEach(Routes.routes, function (route, path) {
                        $routeProvider.when(
                            path, {
                                templateUrl: route.templateUrl,
                                resolve: new Dependency(route.dependencies),
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

        app.run(function ($http, $cookies, $rootScope, $location, Auth) {
            $http.defaults.headers.common['x-csrf-token'] = $cookies._csrf;

            $rootScope.$on('$routeChangeStart', function (event, next) {
                if (next.authenticate && !Auth.isLoggedIn()) {
                    $location.path('/login');
                }
            });



        });

        return app;
    });