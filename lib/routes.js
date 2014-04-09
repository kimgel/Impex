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
    app.use('/api/settings/broker', require('./modules/settings/broker').middleware); /*broker*/



    // All other routes to use Angular routing in app/scripts/app.js
    app.get('/modules/*', index.partials);
    app.get('/*', custMiddleware.setUserCookie, index.index);

    // All undefined api routes should return a 404
    app.get('/api/*', function(req, res) {
        res.send(404);
    });


};
