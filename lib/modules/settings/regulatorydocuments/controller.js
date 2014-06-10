'use strict';

var mongoose = require('mongoose'),
    select = require('mongoose-json-select').select,
    fs = require('fs'),
    fmt = require('fmt'),
    _ = require('lodash'),
    moment = require('moment'),    
    config = require('../../../config/credentials/aws'),
    multiparty = require('multiparty'),
    s3 = require('streaming-s3'),
    RegulatoryDoc = require('./schema').RegulatoryDoc;


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
exports.show = function(req, res) {
    res.jsonp(req.regulatoryDoc);
};

//Update Regulatory Document
exports.update = function(req, res) {
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
exports.create = function(req, res) {
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

exports.upload = function(req, res) {
    var form = new multiparty.Form();

    form.on('file', function(name, file) {
        var fileName = file.originalFilename,
            path = file.path;
         
        var fileStream = fs.createReadStream(path);
        var uploader = new s3(
            fileStream,
            config.aws.key,
            config.aws.secret,{
                Bucket: config.aws.bucket,
                Key: 'regulatorydocuments/' + fileName
            }, function(err, resp) {
                if (err) return fmt.dump(err, 'Error');
                // delete temp file
                resp.FileName = fileName;
                fs.unlinkSync(path);
                res.jsonp(resp);
            }
        );

    });
    form.parse(req);
};