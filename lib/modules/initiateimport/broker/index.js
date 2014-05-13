'use strict';

var express = require('express');
var router = new express.Router();
var planners = require('./controller');

router.get('/', planners.all);
router.get('/:plannerId', planners.show);
router.put('/:plannerId', planners.update);
router.post('/', planners.create);

router.param('plannerId', planners.planner);

module.exports.router = router;
