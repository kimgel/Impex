'use strict';

var express = require('express'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    mongoose = require('mongoose'),
    config = require('./lib/config/credentials/config');

var Impex = function () {

    var self = this;

    // Populate cache
    self.populateCache = function () {
        if (typeof self.zcache === "undefined") {
            self.zcache = {
                'index.html': ''
            };
        }
        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./app/index.html');
    };

    // Retrieve entry content from cache
    self.cache_get = function (key) {
        return self.zcache[key];
    };


    self.initializeServer = function () {
        // Passport Configuration
        require('./lib/config/passport');

        // Connect to database
        mongoose.connect(config.mongo.uri, config.mongo.options);

        // Init Express
        self.app = express();

        // Express settings
        require('./lib/config/express')(self.app);

        // Routing
        require('./lib/routes')(self.app);
    };

    self.initialize = function () {
        //self.setupVariables();
        self.populateCache();

        // Create the express server and routes.
        self.initializeServer();
    };

    self.start = function () {

        //  Start the app on the specific interface (and port).
        self.app.set('port', config.port);
        self.app.set('ipaddr', config.ip);

        // Set http
        self.app.listen(
            self.app.get('port'), self.app.get('ipaddr'),
            function () {
                console.log("Express server listening on port " + self.app.get('port'));
                console.log("Environment: " + config.env);
            }
        );

        module.exports = self.app;
    };

};

var startApp = new Impex();
startApp.initialize();
startApp.start();