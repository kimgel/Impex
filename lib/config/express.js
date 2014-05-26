'use strict';


var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    serveStatic = require('serve-static'),
    compress = require('compression'),
    errorHandler = require('errorhandler'),
    morgan = require('morgan'),
    helmet = require('helmet'),
    path = require('path'),
    config = require('./config'),
    cred = require('./credentials/mongo'),
    passport = require('passport'),
    csrf = require('csurf'),
    fs = require('fs'),
    MongoStore = require('connect-mongo')(session);

module.exports = function(app) {

    /* Disable caching of scripts for easier testing
    =================================================================== */
    app.use(function noCache(req, res, next) {
        if (req.url.indexOf('/modules/') === 0) {
            res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.header('Pragma', 'no-cache');
            res.header('Expires', 0);
        }
        next();
    });

    /* Log request (Development only)
    =================================================================== */
    if (config.env === 'development') {

        app.use(morgan('dev'));
        app.set('view cache', false);

    } else if (config.env === 'production') {
        app.locals.cache = 'memory';
    }

    /* Assets compression
    =================================================================== */
    app.use(compress({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    /* Defaults
    =================================================================== */
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', config.root + '/app');

    /* Request body parsing middleware 
    =================================================================== */

    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.enable('jsonp callback');
    app.use(cookieParser());

    /* Persist session with MongoStore
    =================================================================== */
    app.use(session({
        secret: cred.mongo.secret,
        maxAge: new Date(Date.now() + 3600000),
        store: new MongoStore({
            url: config.mongo.uri,
            collection: cred.mongo.collection
        }, function() {
            console.log("Database connection open at: " + config.mongo.uri);
        })
    }));

    /* Init csrf protection
    =================================================================== */
    app.use(csrf());

    /* Passport Session
    =================================================================== */
    app.use(passport.initialize());
    app.use(passport.session());

    /* Use helmet to secure Express headers
    =================================================================== */
    app.use(helmet.xframe());
    app.use(helmet.iexss());
    app.use(helmet.contentTypeOptions());
    app.use(helmet.ienoopen());
    app.disable('x-powered-by');

    /* Send token
    =================================================================== */

    app.use(function(req, res, next) {
        res.cookie('_csrf', req.csrfToken());
        res.locals.csrftoken = req.csrfToken();
        next();
    });

    /* Static
    =================================================================== */
    app.use('/', serveStatic(config.root + '/app'));

    /* Error Handler
    =================================================================== */
    app.use(errorHandler());

};
