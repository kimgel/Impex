'use strict';

var api = require('./modules/api');

module.exports = function(app) {

/* Users
=================================================================== */ 
    app.use('/api/users', require('./modules/user').router); 

/* Session
=================================================================== */ 
    app.use('/api/session', require('./modules/session').router);  

/* App API
=================================================================== */ 
    app.use('/api/files', require('./modules/file').router); 
    app.use('/api/broker', require('./modules/settings/broker').router); 
    app.use('/api/supplier', require('./modules/settings/supplier').router); 
    app.use('/api/forwarder', require('./modules/settings/forwarder').router); 
    app.use('/api/item', require('./modules/settings/item').router); 
    app.use('/api/planner', require('./modules/initiateimport/planner').router); 


/* Partials
=================================================================== */ 
    app.use('/', require('./modules/index').router); 
};
