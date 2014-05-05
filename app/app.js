'use strict';

define([
    'config/routes',
    'config/dependency'
], function(config, dependency) {
    var app = angular.module('app', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'mgcrea.ngStrap'
    ]);
    app.config([
        '$routeProvider',
        '$locationProvider',
        '$httpProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function(
            $routeProvider,
            $locationProvider,
            $httpProvider,
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

            $httpProvider.interceptors.push(['$q', '$location',
                function($q, $location) {
                    return {
                        'response': function(response) {
                            if (response.status === 401) {
                                $location.path('/login');
                                return $q.reject(response);
                            }
                            return response || $q.when(response);
                        },

                        'responseError': function(rejection) {

                            if (rejection.status === 401) {
                                $location.url('/login');
                                return $q.reject(rejection);
                            }
                            return $q.reject(rejection);
                        }
                    };
                }
            ]);



            if (config.routes !== undefined) {
                angular.forEach(config.routes, function(route, path) {
                    $routeProvider.when(
                        path, {
                            templateUrl: route.templateUrl,
                            resolve: dependency(route.dependencies),
                            authenticate: route.authenticate
                        }
                    );
                });
            }
            if (config.defaultRoutePath !== undefined) {
                $routeProvider.otherwise({
                    redirectTo: config.defaultRoutePath
                });
            }
        }
    ]).run(function($rootScope, $location, Auth) {
        $rootScope.$on('$routeChangeStart', function(event, next) {
            if (next.authenticate && !Auth.isLoggedIn()) {
                $location.path('/login');
            }
        });
    });

    return app;
});
