'use strict';

var express = require('express');
var router = new express.Router();
var index = require('./controller');
var middleware = require('../middleware');

router.get('/modules/*', index.partials);
router.get('/*', middleware.setUserCookie, index.index);

module.exports.router = router;
