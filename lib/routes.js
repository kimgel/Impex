'use strict';

var api = require('./modules/api'),
    index = require('./modules/index');

var custMiddleware = require('./middleware');

module.exports = function(app) {

    // Core
    app.use('/api/users', require('./modules/user').middleware); /*users*/
    app.use('/api/session', require('./modules/session').middleware); /*session*/    
    app.use('/api/files', require('./modules/file').middleware); /*files*/

    // Settings
    app.use('/api/broker', require('./modules/settings/broker').middleware); /*broker*/

    // Index
    app.use('/', require('./modules/index').middleware); /*index and partials*/
};
