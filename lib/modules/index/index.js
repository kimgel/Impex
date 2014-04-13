'use strict';

var express = require('express');
var router = new express.Router();
var index = require('./controller');
var custMiddleware = require('../../middleware');

router.get('/modules/*', index.partials);
router.get('*', custMiddleware.setUserCookie, index.index);

module.exports = router;
