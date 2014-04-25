'use strict';

/* Dependencies
=================================================================== */ 
var express = require('express'),
    path = require('path'),
    config = require('./config'),
    cred = require('./credentials/mongo'),
    passport = require('passport'),
    fs = require('fs'),
    mongoStore = require('connect-mongo')(express);

/* Express Settings
=================================================================== */ 
module.exports = function(app) {
    app.set('showStackError', true);

/* Cache
=================================================================== */ 
    app.locals.cache = 'memory';

/* Log request (Development only)
=================================================================== */ 
    if (config.env === 'development') {
        app.use(express.logger('dev'));    }

/* Assets compression
=================================================================== */ 
    app.use(express.compress({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        // Levels are specified in a range of 0 to 9, where-as 0 is
        // no compression and 9 is best compression, but slowest
        level: 9
    }));

/* Enable JSONP
=================================================================== */ 
    app.enable('jsonp callback');

/* Defaults
=================================================================== */ 
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', config.root + '/app');

    app.configure(function() {
        app.use(express.cookieParser());
        app.use(express.urlencoded());
        app.use(express.json());
        app.use(express.methodOverride());

/* Persist session with MongoStore
=================================================================== */        
        app.use(express.session({
            secret: cred.mongo.secret,
            store: new mongoStore({
                url: config.mongo.uri,
                collection: cred.mongo.collection
            }, function() {
                console.log("Database connection open at: " + config.mongo.uri);
            })
        }));

/* Passport Session
=================================================================== */ 
        app.use(passport.initialize());
        app.use(passport.session());

/* Static
=================================================================== */ 
        app.use('/', express.static(config.root + '/app'));

/* Cache Images
=================================================================== */ 
        app.use(
            express.static(path.join(config.root + 'app/assets/images'), {
                maxAge: 86400000 /* 1d */
            }));     

/* App router (Should be last)
=================================================================== */ 
        app.use(app.router);
    });

/* Error Handler
=================================================================== */ 
    app.configure(function() {
        app.use(express.errorHandler());
    });
};
