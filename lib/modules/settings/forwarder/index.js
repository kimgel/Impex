'use strict';

var express = require('express'),
    router = new express.Router(),
	forwarders = require('./controller'),
	auth = require('../../middleware');

router.get('/', forwarders.all);
router.get('/:forwarderId', forwarders.show);

router.put('/:forwarderId', auth.ensureAuth, forwarders.update);
router.post('/', auth.ensureAuth, forwarders.create);

router.param('forwarderId', forwarders.forwarder);

module.exports.router = router;
