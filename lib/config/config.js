'use strict';

var _ = require('lodash');

// Load environment configuration
module.exports = _.merge(
    require('./credentials/all.js'),
    require('./credentials/development.js')
    //require('./credentials/production.js')
);
