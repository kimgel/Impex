'use strict';

var express = require('express'),
	router = new express.Router(),
	regulatoryDocuments = require('./controller'),
	auth = require('../../middleware');

router.get('/data', regulatoryDocuments.all);
router.get('/data/:regulatoryDocumentId', regulatoryDocuments.show);

router.put('/data/:regulatoryDocumentId', auth.ensureAuth, regulatoryDocuments.update);

router.post('/data', auth.ensureAuth, regulatoryDocuments.create);
router.post('/file', auth.ensureAuth, regulatoryDocuments.upload);

router.param('regulatoryDocumentId', regulatoryDocuments.regulatoryDocument);

module.exports.router = router;
