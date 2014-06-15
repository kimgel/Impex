'use strict';

var express = require('express'),
	router = new express.Router(),
	warehouses = require('./controller'),
	auth = require('../../middleware');

router.get('/', warehouses.all);
router.get('/:warehouseId', warehouses.show);
router.get('/active', warehouses.active);

router.put('/:warehouseId', auth.ensureAuth, warehouses.update);
router.post('/', auth.ensureAuth, warehouses.create);

router.param('warehouseId', warehouses.warehouse);

module.exports.router = router;
