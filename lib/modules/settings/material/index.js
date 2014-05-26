'use strict';

var express = require('express'),
    auth = require('../../middleware'),
    router = new express.Router(),
    materials = require('./controller');

router.get('/', auth.ensureAuth, materials.all);
router.get('/:materialId', auth.ensureAuth, materials.show);
router.put('/:materialId', auth.ensureAuth, materials.update);
router.post('/', auth.ensureAuth, materials.create);

router.param('materialId', materials.material);

module.exports.router = router;