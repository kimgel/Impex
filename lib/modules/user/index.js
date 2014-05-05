'use strict';

var express = require('express');
var router = new express.Router();
var users = require('./controller');

router.get('/', users.all);
router.post('/', users.create);
router.put('/', users.changePassword);
router.get('/me', users.me);
router.get('/:id', users.show);

module.exports.router = router;
