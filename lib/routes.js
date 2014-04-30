'use strict';

var api = require('./modules/api');

module.exports = function(app) {

    // Core
    app.use('/api/users', require('./modules/user').middleware); /*users*/
    app.use('/api/session', require('./modules/session').middleware); /*session*/    
    app.use('/api/files', require('./modules/file').middleware); /*files*/

    // Settings
    app.use('/api/broker', require('./modules/settings/broker').middleware); /*broker*/
    app.use('/api/supplier', require('./modules/settings/supplier').middleware); /*supplier*/
    app.use('/api/forwarder', require('./modules/settings/forwarder').middleware); /*forwarder*/
    app.use('/api/item', require('./modules/settings/item').middleware); /*item*/


    app.use('/api/planner', require('./modules/initiateimport/planner').middleware); /*planner*/

    // Index
    app.use('/', require('./modules/index').middleware); /*index and partials*/
};
