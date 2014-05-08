require.config({
    baseUrl: '/',
    paths: {

        /* Config
        =================================================================== */
        'States': '/config/states',
        'Dependency': '/config/dependency',
        'Init': '/config/init',

        /* 3rd Party
        =================================================================== */
        'angular': '/assets/bower_components/angular/angular.min',
        'angular-resource': '/assets/bower_components/angular-resource/angular-resource.min',
        'angular-cookies': '/assets/bower_components/angular-cookies/angular-cookies.min',
        'angular-sanitize': '/assets/bower_components/angular-sanitize/angular-sanitize.min',
        'angular-ui-router': '/assets/bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-animate': '/assets/bower_components/angular-animate/angular-animate.min',
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

    },
    shim: {
        'app': {
            deps: [
                'angular',
                'angular-resource',
                'angular-cookies',
                'angular-sanitize',
                'angular-ui-router',
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
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-strap': {
            deps: ['angular']
        },
        'angular-strap-tpl': {
            deps: ['angular-strap']
        }
    }
});

require(['app', 'Users', 'Auth', 'Session', 'Init'],
    function (app) {
        angular.bootstrap(document, ['app']);
    }
);