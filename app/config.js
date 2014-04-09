require.config({
    baseUrl: '/',
    paths: {
        'ng-file-upload-shim': '/assets/bower_components/ng-file-upload/angular-file-upload-shim.min',
        'angular': '/assets/bower_components/angular/angular',
        'angular-resource': '/assets/bower_components/angular-resource/angular-resource',
        'angular-cookies': '/assets/bower_components/angular-cookies/angular-cookies',
        'angular-sanitize': '/assets/bower_components/angular-sanitize/angular-sanitize',
        'angular-route': '/assets/bower_components/angular-route/angular-route',
        'angular-bootstrap': '/assets/bower_components/angular-bootstrap/ui-bootstrap.min',
        'angular-bootstrap-tpls': '/assets/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'ng-file-upload': '/assets/bower_components/ng-file-upload/angular-file-upload.min',
        'auth-factory': '/services/auth',
        'session-factory': '/services/session',
        'user-factory': '/services/user'
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
                'angular-bootstrap',
                'angular-bootstrap-tpls',
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
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-bootstrap-tpls': {
            deps: ['angular-bootstrap']
        },
        'ng-file-upload': {
            deps: ['angular']
        }
    }
});

require(
    [
        'app',
        'auth-factory',
        'session-factory',
        'user-factory'
    ],
    function(app) {
        angular.bootstrap(document, ['app']);
    }
);
