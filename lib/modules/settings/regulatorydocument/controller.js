'use strict';

var mongoose = require('mongoose'),
    select = require('mongoose-json-select').select,
    _ = require('lodash'),
    moment = require('moment'),    
    config = require('../../../config/credentials/aws'),
    multiparty = require('multiparty'),
    knox = require('knox'),
    MultiPartUpload = require('knox-mpu'),
    RegulatoryDoc = require('./schema').RegulatoryDoc,
    upload = null;

var s3Client = knox.createClient({
    key: config.aws.key,
    secret: config.aws.secret,
    bucket: config.aws.bucket,
    region: config.aws.region
});

// Find Regulatory Document by id
exports.regulatoryDocument = function(req, res, next, id) {
    RegulatoryDoc.load(id, function(err, regulatoryDoc) {
        if (err) return next(err);
        if (!regulatoryDoc) return next(new Error('Failed to load Regulatory Document: ' + id));
        req.regulatoryDoc = regulatoryDoc;
        next();
    });
};

//List all Regulatory Documents
exports.all = function(req, res) {
    var query = req.query.fields;

    //replace comma with whitespace to validate syntax for mongoose select
    var columns = (query ? query.replace(/\,/g, ' '): '');
    RegulatoryDoc
        .find()
        .select(columns)
        .sort('-created')
        .populate('creator','name')
        .exec(function(err, regulatoryDocs) {
            if (!err) {
                res.jsonp(regulatoryDocs);
            } else {
                return res.send(err);
            }
        });
};

//Show Regulatory Document
exports.showDocument = function(req, res) {
    res.jsonp(req.regulatoryDoc);
};

//Update Regulatory Document
exports.updateDocument = function(req, res) {
    var updateRegulatoryDoc = req.regulatoryDoc;
    updateRegulatoryDoc = _.extend(updateRegulatoryDoc, req.body);

    updateRegulatoryDoc.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateRegulatoryDoc: updateRegulatoryDoc
            });
        } else {
            res.jsonp(updateRegulatoryDoc);
        }
    });
};
// Create Regulatory Document
exports.createDocument = function(req, res) {
    var request = req.body;
    var newRegulatoryDoc = new RegulatoryDoc(request);
    var dateIssued = request.date_issued;
    var validUntil = request.valid_until;
    newRegulatoryDoc.creator = req.user;
    if (dateIssued) {
        newRegulatoryDoc.date_issued = new Date(req.body.date_issued);
    }
    if (validUntil) {
        newRegulatoryDoc.valid_until = new Date(req.body.valid_until);
    }
    newRegulatoryDoc.save(function(err) {
        if (!err) {
            res.jsonp(newRegulatoryDoc);
        } else {
            return res.send(err);
        }
    });
};

exports.uploadDocument = function(req, res) {
    var form = new multiparty.Form();
    form.on('part', function(file) {
        var fileName = file.filename,
            path = '/regulatorydocuments/'+ fileName;

        upload = new MultiPartUpload({
                client: s3Client,
                objectName: path,
                stream: file
            },
            function(err, s3response) {
                if (!err) {
                    s3response["FileName"] = fileName;
                    res.jsonp(s3response);
                } else {
                    return res.send(err);
                }
            }
        );
    });
    form.parse(req);
};