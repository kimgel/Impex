'use strict';

var express = require('express'),
    middleware = require('../../middleware'),
    router = new express.Router(),
    items = require('./controller');

router.get('/', middleware.auth, items.all);
router.get('/:itemId', middleware.auth, items.show);
router.put('/:itemId', middleware.auth, items.update);
router.post('/', middleware.auth, items.create);

router.param('itemId', items.item);

module.exports.router = router;