'use strict';

var api = require('./modules/api');

module.exports = function (app) {

    // Users
    app.use('/api/user', require('./modules/user').router);

    // Session
    app.use('/api/session', require('./modules/session').router);

    // App API Routes
    app.use('/api/broker', require('./modules/settings/broker').router);
    app.use('/api/supplier', require('./modules/settings/supplier').router);
    app.use('/api/forwarder', require('./modules/settings/forwarder').router);
    app.use('/api/material', require('./modules/settings/material').router);
    app.use('/api/shippingline', require('./modules/settings/shippingline').router);
    app.use('/api/regulatorydocument', require('./modules/settings/regulatorydocument').router);
    app.use('/api/planner', require('./modules/initiateimport/planner').router);
    app.use('/api/warehouse', require('./modules/settings/warehouse').router);

    // Partials
    app.use('/', require('./modules/index').router);
};