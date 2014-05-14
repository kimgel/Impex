'use strict';

var express = require('express'),
	middleware = require('../../middleware'),
    router = new express.Router(),
    planners = require('./controller');

router.get('/', middleware.auth, planners.all);
router.get('/:plannerId', middleware.auth, planners.show);
router.put('/:plannerId', middleware.auth, planners.update);
router.post('/', middleware.auth, planners.create);

router.param('plannerId', planners.planner);

module.exports.router = router;
