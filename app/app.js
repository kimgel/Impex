'use strict';

define(['States'],
    function (States) {
        var app = angular.module('app', [
            'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ngAnimate', 'mgcrea.ngStrap', 'chieffancypants.loadingBar'
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
            'cfpLoadingBarProvider',
            function (
                $stateProvider,
                $urlRouterProvider,
                $httpProvider,
                $locationProvider,
                $controllerProvider,
                $compileProvider,
                $filterProvider,
                $provide,
                cfpLoadingBarProvider
            ) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;

                cfpLoadingBarProvider.includeSpinner = false;

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
                    angular.forEach(States.states, function (state) {
                        $stateProvider.state(state);
                    });
                }
                if (States.defaultStatePath !== undefined) {
                    $urlRouterProvider.otherwise(States.defaultStatePath);
                }

            }
        ]);
        
        app.run(function ($http, $state, $cookies, $rootScope, Auth) {
            
            $http.defaults.headers.common['x-csrf-token'] = $cookies._csrf;
            $rootScope.$on('$stateChangeStart', function (event, next) {
                if (next.authenticate && !Auth.isLoggedIn()) {
                    event.preventDefault();
                    $state.go('login');
                }
            });

        });

        return app;
    });