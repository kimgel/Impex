'use strict';

define(['States', 'Dependency'],
    function (States, Dependency) {
        var app = angular.module('app', [
            'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ngAnimate', 'mgcrea.ngStrap'
        ]);

        app.config([
            '$stateProvider',
            '$urlRouterProvider',
            '$httpProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            function (
                $stateProvider,
                $urlRouterProvider,
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


                if (States.states !== undefined) {
                    angular.forEach(States.states, function (param, name) {
                        $stateProvider.state(
                            name, {
                                url: param.url,
                                templateUrl: param.templateUrl,
                                resolve: new Dependency(param.dependencies),
                                authenticate: param.authenticate
                            }
                        );
                    });
                }
                if (States.defaultStatePath !== undefined) {
                    $urlRouterProvider.otherwise(States.defaultStatePath);
                }
            }
        ]);

        app.run(function ($http, $cookies, $rootScope, $location, Auth) {
            $http.defaults.headers.common['x-csrf-token'] = $cookies._csrf;

            $rootScope.$on('$stateChangeStart', function (event, next) {
                if (next.authenticate && !Auth.isLoggedIn()) {
                    $location.path('/login');
                }
            });



        });

        return app;
    });