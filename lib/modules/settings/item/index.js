'use strict';

var express = require('express');
var router = new express.Router();
var items = require('./controller');

router.get('/', items.all);
router.get('/:itemId', items.show);
router.put('/:itemId', items.update);
router.post('/', items.create);

router.param('itemId', items.item);

module.exports.router = router;
