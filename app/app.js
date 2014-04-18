'use strict';

define(['routes', 'services/dependency'], function(config, dependency) {
    var app = angular.module('app', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'angularFileUpload',
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
                        'responseError': function(response) {
                            if (response.status === 401) {
                                $location.path('/login');
                                return $q.reject(response);
                            } else {
                                return $q.reject(response);
                            }
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
            if (config.defaultRoutePaths !== undefined) {
                $routeProvider.otherwise({
                    redirectTo: config.defaultRoutePaths
                });
            }
        }
    ]).run(function($rootScope, $location, Auth) {
        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function(event, next) {
            if (next.authenticate && !Auth.isLoggedIn()) {
                $location.path('/login');
            }
        });
    });

    return app;
});
