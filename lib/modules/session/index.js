'use strict';


var express = require('express');
var router = new express.Router();
var session = require('./controller');

router.post('/', session.login);
router.delete('/', session.logout);

module.exports.router = router;
