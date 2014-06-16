'use strict';


var domain = require('domain'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    serveStatic = require('serve-static'),
    compress = require('compression'),
    errorHandler = require('errorhandler'),
    helmet = require('helmet'),
    path = require('path'),
    config = require('./credentials/config'),
    cred = require('./credentials/mongo'),
    passport = require('passport'),
    csrf = require('csurf'),
    fs = require('fs'),
    MongoStore = require('connect-mongo')(session);

module.exports = function(app) {

    //Enable express behind proxy
    app.enable('trust proxy');

    // Log request (Development only)
    if (config.env === 'development') {
        var morgan = require('morgan');
        app.use(morgan('dev'));
        app.set('view cache', false);

        // create dummy user
        require('./credentials/dummy');

    } else if (config.env === 'production') {
        app.locals.cache = 'memory';
    }

    // Assets compression
    app.use(compress({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    // Defaults
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', config.root + '/app');

    // Request body parsing middleware
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(cookieParser());

    // Enable jsonp callback
    app.enable('jsonp callback');

    // Persist session with MongoStore
    app.use(session({
        secret: cred.mongo.secret,
        cookie: {
            maxAge: 86400000 //1 day
        },
        store: new MongoStore({
            url: config.mongo.uri,
            collection: cred.mongo.collection
        }, function() {
            console.log("Database connection open at: " + config.mongo.uri);
        })
    }));

    // Init csrf protection
    app.use(csrf());

    // Passport Session
    app.use(passport.initialize());
    app.use(passport.session());

    // Use helmet to secure Express headers
    app.use(helmet.xframe());
    app.use(helmet.iexss());
    app.use(helmet.contentTypeOptions());
    app.use(helmet.ienoopen());
    app.disable('x-powered-by');

    // Send token
    app.use(function(req, res, next) {
        res.cookie('_csrf', req.csrfToken());
        res.locals.csrftoken = req.csrfToken();
        next();
    });

    // Static
    app.use('/', serveStatic(config.root + '/app'));

    // Wrap every request in a domain
    // This will throw 500 (Internal Server Error)
    app.use(function (req, res, next) {
        var d = domain.create();
        d.on("error", next);
        d.run(next);
    });

    app.use(errorHandler());

};
