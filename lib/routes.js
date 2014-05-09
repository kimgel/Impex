'use strict';

var api = require('./modules/api'),
    custMiddleware = require('./modules/middleware');

module.exports = function (app) {

    /* Users
=================================================================== */
    app.use('/api/users', custMiddleware.auth, require('./modules/user').router);

    /* Session
=================================================================== */
    app.use('/api/session', require('./modules/session').router);

    /* App API
=================================================================== */
    app.use('/api/files', custMiddleware.auth, require('./modules/file').router);
    app.use('/api/broker', custMiddleware.auth, require('./modules/settings/broker').router);
    app.use('/api/supplier', custMiddleware.auth, require('./modules/settings/supplier').router);
    app.use('/api/forwarder', custMiddleware.auth, require('./modules/settings/forwarder').router);
    app.use('/api/item', custMiddleware.auth, require('./modules/settings/item').router);
    app.use('/api/planner', custMiddleware.auth, require('./modules/initiateimport/planner').router);


    /* Partials
=================================================================== */
    app.use('/', require('./modules/index').router);
};