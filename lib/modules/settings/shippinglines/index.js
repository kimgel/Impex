'use strict';

var express = require('express');
var router = new express.Router();
var shippinglines = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', shippinglines.all);
router.get('/:shippinglineId', shippinglines.show);

router.put('/:shippinglineId', custMiddleware.auth, shippinglines.update);
router.post('/', custMiddleware.auth, shippinglines.create);

router.param('shippinglineId', shippinglines.shippingline);

module.exports.router = router;
