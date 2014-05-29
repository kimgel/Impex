'use strict';

var mongoose = require('mongoose'),
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
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    RegulatoryDoc
        .find()
        .sort('-created')
        .populate(opts)
        .lean()
        .exec(function(err, regulatoryDocs) {
            if (!err) {
                regulatoryDocs = regulatoryDocs.map(function(regulatoryDoc) {
                    regulatoryDoc.expired = moment(regulatoryDoc.valid_until).isBefore();
                    regulatoryDoc.expired 
                        ? regulatoryDoc.status = 'expired' 
                        : regulatoryDoc.status = 'active';
                    return regulatoryDoc;
                });
                res.jsonp(regulatoryDocs);
            } else {
                return res.send(err);
            }
        });
};

//Show Regulatory Document
exports.show = function(req, res) {
    var regulatoryDoc = req.regulatoryDoc.toObject();
    var expired = moment(regulatoryDoc.valid_until).isBefore();
    regulatoryDoc["expired"] = expired;
    expired 
        ? regulatoryDoc["status"] = 'expired' 
        : regulatoryDoc["status"] = 'active';
    res.jsonp(regulatoryDoc);
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
            }, function(err, resp, stats) {
                if (err) return fmt.dump(err, 'Error');
                // delete temp file
                resp.FileName = fileName;
                fs.unlinkSync(path)
                res.jsonp(resp);
            }
        );

    });
    form.parse(req);
};