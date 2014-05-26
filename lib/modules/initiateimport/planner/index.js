'use strict';

var express = require('express'),
	auth = require('../../middleware'),
    router = new express.Router(),
    planners = require('./controller');

router.get('/', auth.ensureAuth, planners.all);
router.get('/:plannerId', auth.ensureAuth, planners.show);
router.put('/:plannerId', auth.ensureAuth, planners.update);
router.post('/', auth.ensureAuth, planners.create);

router.param('plannerId', planners.planner);

module.exports.router = router;
