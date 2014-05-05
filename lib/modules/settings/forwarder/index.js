'use strict';

var express = require('express');
var router = new express.Router();
var forwarders = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', forwarders.all);
router.get('/:forwarderId', forwarders.show);

router.put('/:forwarderId', custMiddleware.auth, forwarders.update);
router.post('/', custMiddleware.auth, forwarders.create);

router.param('forwarderId', forwarders.forwarder);

module.exports.router = router;
