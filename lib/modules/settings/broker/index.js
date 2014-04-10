'use strict';

var express = require('express');
var router = new express.Router();
var broker = require('./controller');

router.post('/', broker.create);

module.exports = router;