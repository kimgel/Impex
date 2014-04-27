'use strict';

var express = require('express');
var router = new express.Router();
var items = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', items.all);
router.get('/:itemId', items.show);
router.put('/:itemId', custMiddleware.auth, items.update);
router.post('/', custMiddleware.auth, items.create);

router.param('itemId', items.item);

module.exports.router = router;
