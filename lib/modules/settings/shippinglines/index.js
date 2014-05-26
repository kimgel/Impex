'use strict';

var express = require('express'),
	router = new express.Router(),
	shippinglines = require('./controller'),
	auth = require('../../middleware');

router.get('/', shippinglines.all);
router.get('/:shippinglineId', shippinglines.show);

router.put('/:shippinglineId', auth.ensureAuth, shippinglines.update);
router.post('/', auth.ensureAuth, shippinglines.create);

router.param('shippinglineId', shippinglines.shippingline);

module.exports.router = router;
