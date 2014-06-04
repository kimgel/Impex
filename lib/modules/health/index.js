'use strict';

var express = require('express'),
    router = new express.Router(),
    health = require('./controller'),
    auth = require('../middleware');

router.get('/', auth.ensureAuth, health.check);

module.exports.router = router;
