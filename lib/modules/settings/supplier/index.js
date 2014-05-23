'use strict';

var express = require('express'),
	router = new express.Router(),
	suppliers = require('./controller'),
	auth = require('../../middleware');

router.get('/', suppliers.all);
router.get('/:supplierId', suppliers.show);

router.put('/:supplierId', auth.ensureAuth, suppliers.update);
router.post('/', auth.ensureAuth, suppliers.create);

router.param('supplierId', suppliers.supplier);

module.exports.router = router;
