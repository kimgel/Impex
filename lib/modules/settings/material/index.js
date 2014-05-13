'use strict';

var express = require('express'),
    middleware = require('../../middleware'),
    router = new express.Router(),
    materials = require('./controller');

router.get('/', middleware.auth, materials.all);
router.get('/:itemId', middleware.auth, materials.show);
router.put('/:itemId', middleware.auth, materials.update);
router.post('/', middleware.auth, materials.create);

router.param('itemId', materials.material);

module.exports.router = router;