'use strict';

var express = require('express');
var router = new express.Router();
var broker = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', broker.all);
router.post('/', custMiddleware.auth, broker.create);

module.exports = router;
