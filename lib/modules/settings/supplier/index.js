'use strict';

var express = require('express');
var router = new express.Router();
var suppliers = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', suppliers.all);
router.get('/:supplierId', suppliers.show);

router.put('/:supplierId', custMiddleware.auth, suppliers.update);
router.post('/', custMiddleware.auth, suppliers.create);

router.param('supplierId', suppliers.supplier);

module.exports.router = router;
