require.config({
    baseUrl: '/',
    paths: {

        /* 3rd Party
        =================================================================== */
        'angular': '/assets/bower_components/angular/angular',
        'angular-resource': '/assets/bower_components/angular-resource/angular-resource',
        'angular-cookies': '/assets/bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '/assets/bower_components/angular-sanitize/angular-sanitize',
        'angular-route': '/assets/bower_components/angular-route/angular-route',
        'angular-animate': '/assets/bower_components/angular-animate/angular-animate',
        'angular-strap': '/assets/bower_components/angular-strap/dist/angular-strap.min',
        'angular-strap-tpl': '/assets/bower_components/angular-strap/dist/angular-strap.tpl.min',

        /* Services
        =================================================================== */
        'Auth': '/modules/auth/service',
        'Session': '/modules/session/service',
        'Users': '/modules/user/service',
        'Brokers': '/modules/broker/service',
        'Forwarders': '/modules/forwarder/service',
        'Suppliers': '/modules/supplier/service',
        'Items': '/modules/item/service',
        'Planners': '/modules/initiateimport/planner/service',

        /* Directives
        =================================================================== */
        'Navigation': '/directives/navigation'
    },
    shim: {
        'app': {
            deps: [
                'angular',
                'angular-resource',
                'angular-cookies',
                'angular-sanitize',
                'angular-route',
                'angular-animate',
                'angular-strap',
                'angular-strap-tpl'
            ]
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-strap':{
            deps: ['angular']
        },
        'angular-strap-tpl':{
            deps: ['angular-strap']
        },
        'ng-file-upload': {
            deps: ['angular']
        }
    }
});

require(
    [
        'app',
        'Users',
        'Auth',
        'Session',
        'Navigation'
    ],
    function(app) {
        angular.bootstrap(document, ['app']);
    }
);
