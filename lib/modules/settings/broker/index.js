'use strict';

var express = require('express'),
	router = new express.Router(),
	brokers = require('./controller'),
	auth = require('../../middleware');

router.get('/', brokers.all);
router.get('/:brokerId', brokers.show);
router.get('/active', brokers.active);

router.put('/:brokerId', auth.ensureAuth, brokers.update);
router.post('/', auth.ensureAuth, brokers.create);

router.param('brokerId', brokers.broker);

module.exports.router = router;
