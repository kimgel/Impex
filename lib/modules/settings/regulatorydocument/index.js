'use strict';

var express = require('express'),
	router = new express.Router(),
	regulatoryDocuments = require('./controller'),
	auth = require('../../middleware');

router.get('/data', auth.ensureAuth, regulatoryDocuments.all);
router.get('/data/:regulatoryDocumentId', auth.ensureAuth, regulatoryDocuments.showDocument);

router.put('/data/:regulatoryDocumentId', auth.ensureAuth, regulatoryDocuments.updateDocument);

router.post('/data', auth.ensureAuth, regulatoryDocuments.createDocument);
router.post('/file', auth.ensureAuth, regulatoryDocuments.uploadDocument);

router.param('regulatoryDocumentId', regulatoryDocuments.regulatoryDocument);

module.exports.router = router;
