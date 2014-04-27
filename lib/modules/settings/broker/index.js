'use strict';

var express = require('express');
var router = new express.Router();
var brokers = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/', brokers.all);
router.get('/:brokerId', brokers.show);
router.get('/active', brokers.active);

router.put('/:brokerId', custMiddleware.auth, brokers.update);
router.post('/', custMiddleware.auth, brokers.create);

router.param('brokerId', brokers.broker);

module.exports.router = router;
