'use strict';

/* Dependencies
=================================================================== */
var express = require('express'),

/* Express Modules
=================================================================== */
    connect = require('connect'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    serveStatic = require('serve-static'),
    compress = require('compression')(),
    errorHandler = require('errorhandler'),
    morgan = require('morgan'),


/* Other Modules
=================================================================== */
    path = require('path'),
    config = require('./config'),
    cred = require('./credentials/mongo'),
    passport = require('passport'),
    fs = require('fs'),
    mongoStore = require('connect-mongo')(connect);

/* Express Settings
=================================================================== */
module.exports = function(app) {
    
/* Log request (Development only)
=================================================================== */
    if (config.env === 'development') {
        app.use(morgan({
            format: 'dev'
        }));
    }

/* Enable JSONP
=================================================================== */
    app.enable('jsonp callback');

    /* Defaults
=================================================================== */
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', config.root + '/app');


    app.use(cookieParser());
    app.use(bodyParser());
    app.use(methodOverride());

    /* Persist session with MongoStore
=================================================================== */
    app.use(session({
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
    app.use('/', serveStatic(config.root + '/app'));

    /* Cache Images
=================================================================== */
    app.use(
        serveStatic(path.join(config.root + 'app/assets/images'), {
            maxAge: 86400000 /* 1d */
        }));


    /* Error Handler
=================================================================== */
    app.use(errorHandler());

};
