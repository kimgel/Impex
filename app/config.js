require.config({
    baseUrl: '/',
    paths: {
        'ng-file-upload-shim': '/assets/bower_components/ng-file-upload/angular-file-upload-shim.min',
        'angular': '/assets/bower_components/angular/angular',
        'angular-resource': '/assets/bower_components/angular-resource/angular-resource',
        'angular-cookies': '/assets/bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '/assets/bower_components/angular-sanitize/angular-sanitize',
        'angular-route': '/assets/bower_components/angular-route/angular-route',
        'angular-strap': '/assets/bower_components/angular-strap/dist/angular-strap.min',
        'angular-strap-tpl': '/assets/bower_components/angular-strap/dist/angular-strap.tpl.min',
        'ng-file-upload': '/assets/bower_components/ng-file-upload/angular-file-upload.min',
        'auth-factory': '/services/auth',
        'session-factory': '/services/session',
        'user-factory': '/services/user',
        'global-directives': '/directives/global'
    },
    shim: {
        'app': {
            deps: [
                'angular',
                'ng-file-upload-shim',
                'angular-resource',
                'angular-cookies',
                'angular-sanitize',
                'angular-route',
                'angular-strap',
                'angular-strap-tpl',
                'ng-file-upload'
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
        'global-directives',
        'auth-factory',
        'session-factory',
        'user-factory'
    ],
    function(app) {
        angular.bootstrap(document, ['app']);
    }
);
