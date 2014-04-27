'use strict';

var express = require('express');
var router = new express.Router();
var file = require('./controller');

router.get('/:id', file.getFiles);
router.post('/:id', file.removeFile);
router.post('/', file.addFile);

module.exports.router = router;
