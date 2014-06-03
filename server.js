'use strict';

var express = require('express'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    mongoose = require('mongoose');

var privateKey = fs.readFileSync('./lib/certs/privatekey.pem').toString();
var certificate = fs.readFileSync('./lib/certs/certificate.pem').toString();
var credentials = {
    key: privateKey,
    cert: certificate
};

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

    // terminator === the termination handler
    // Terminate server on receipt of the specified signal.
    // @param {string} sig  Signal to terminate on.
    self.terminator = function (sig) {
        if (typeof sig === "string") {
            console.log('%s: Received %s - terminating app ...',
                new Date(Date.now()), sig);
            process.exit(1);
        }

        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected');
            process.exit(0);
        });
        console.log('%s: Node server stopped.', new Date(Date.now()));
    };


    // Setup termination handlers (for exit and a list of signals).

    self.setupTerminationHandlers = function () {
        //  Process on exit and signals.

        process.on('exit', function () {
            self.terminator();
        });

        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
            'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
            ].forEach(function (element) {
            process.on(element, function () {
                self.terminator(element);
            });
        });
    };
    self.initializeServer = function () {
        // Application Config
        var config = require('./lib/config/config'),
            // Passport Configuration
            passport = require('./lib/config/passport');
        // Connect to database
        mongoose.connect(config.mongo.uri, config.mongo.options);
        self.app = express();

        // Express settings
        require('./lib/config/express')(self.app);

        // Routing
        require('./lib/routes')(self.app);
    };

    self.initialize = function () {
        //self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };

    self.start = function () {

        //  Start the app on the specific interface (and port).
        self.app.set('port', 7777);
        self.app.set('sslport', 8888);
        self.app.set('ipaddr', 'localhost');

        // Set http
        self.app.listen(
            self.app.get('port'), self.app.get('ipaddr'),
            function () {
                console.log("Express server listening on port " + self.app.get('port'));
            }
        );
        // Set https
        https.createServer(credentials, self.app).listen(
            self.app.get('sslport'),
            self.app.get('ipaddr'),
            function () {
                console.log("SSL server started on: " + self.app.get('sslport'));
            }
        );

        module.exports = self.app;
    };

};

var startApp = new Impex();
startApp.initialize();
startApp.start();