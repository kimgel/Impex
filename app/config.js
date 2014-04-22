require.config({
    appDir: '../../../',
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

        /* Global
        =================================================================== */
        'Auth': '/services/auth',
        'Session': '/services/session',
        'User': '/services/user',
        'GlobalDirectives': '/directives/global',

        /* Services
        =================================================================== */
        'Brokers': '/services/brokers',
        'Forwarders': '/services/forwarders',
        'Suppliers': '/services/suppliers',
        'Items': '/services/items'
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
        'GlobalDirectives',
        'Auth',
        'Session',
        'User'
    ],
    function(app) {
        angular.bootstrap(document, ['app']);
    }
);
