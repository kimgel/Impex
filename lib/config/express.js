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
    app.configure(function() {
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');

        //log all request
        app.use(express.logger('dev'));
        
        app.use(express.urlencoded());
        app.use(express.json());
        
        app.use(express.cookieParser());
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
        app.use(express.static(path.join(config.root, 'app')));
        // Cache images
        app.use(
            express.static(path.join(config.root + 'app/assets/images'), {
                maxAge: 86400000 /* 1d */
            }));

        app.use(express.static(path.join(config.root, 'app')));
        app.set('views', config.root + '/app');

        // Router (only error handlers should come after this)
        app.use(app.router);
    });

    // Error handler
    app.configure(function() {
        app.use(express.errorHandler());
    });
};
