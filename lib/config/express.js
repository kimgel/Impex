'use strict';

var express = require('express'),
    path = require('path'),
    config = require('./config'),
    cred = require('./credentials/mongo'),
    passport = require('passport'),
    fs = require('fs'),
    mongoStore = require('connect-mongo')(express);
/**
 * Express configuration
 */
module.exports = function(app) {
    app.set('showStackError', true);

    // cache=memory 
    app.locals.cache = 'memory';

    //log all request
    if (config.env === 'development') {
        app.use(express.logger('dev'));    }

    // To ensure that all assets and data are compressed (utilize bandwidth)
    app.use(express.compress({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        // Levels are specified in a range of 0 to 9, where-as 0 is
        // no compression and 9 is best compression, but slowest
        level: 9
    }));

    // Enable jsonp
    app.enable('jsonp callback');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', config.root + '/app');

    app.configure(function() {
        app.use(express.cookieParser());
        app.use(express.urlencoded());
        app.use(express.json());
        app.use(express.methodOverride());

        // Persist sessions with mongoStore        
        app.use(express.session({
            secret: cred.mongo.secret,
            store: new mongoStore({
                url: config.mongo.uri,
                collection: cred.mongo.collection
            }, function() {
                console.log("Database connection open at: " + config.mongo.uri);
            })
        }));

        //use passport session
        app.use(passport.initialize());
        app.use(passport.session());

        //static
        app.use(express.favicon(path.join(config.root, 'app', 'assets/images/favicon.ico')));
        app.use('/', express.static(config.root + '/app'));

        // Cache images
        app.use(
            express.static(path.join(config.root + 'app/assets/images'), {
                maxAge: 86400000 /* 1d */
            }));     

        // Router (only error handlers should come after this)
        app.use(app.router);
    });

    // Error handler
    app.configure(function() {
        app.use(express.errorHandler());
    });
};
