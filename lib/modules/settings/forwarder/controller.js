'use strict';

var mongoose = require('mongoose'),
    _ = require('lodash'),
    moment = require('moment'),
    Forwarder = require('./schema').Forwarder;


// Find Forwarder by id
exports.forwarder = function(req, res, next, id) {
    Forwarder.load(id, function(err, forwarder) {
        if (err) return next(err);
        if (!forwarder) return next(new Error('Failed to load Forwarder: ' + id));
        req.forwarder = forwarder;
        next();
    });
};

//List all Forwarder
exports.all = function(req, res) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    Forwarder
        .find()
        .sort('-created')
        .populate(opts)
        .lean()
        .exec(function(err, forwarders) {
            if (!err) {
                forwarders = forwarders.map(function(forwarder) {
                    forwarder.expired = moment(forwarder.valid_to).isBefore();
                    forwarder.expired 
                        ? forwarder.status = 'inactive' 
                        : forwarder.status = 'active';
                    return forwarder;
                });
                res.jsonp(forwarders);
            } else {
                return res.send(err);
            }
        });
};

//Show Forwarder
exports.show = function(req, res) {
    var forwarder = req.forwarder.toObject();
    var expired = moment(forwarder.valid_to).isBefore();
    forwarder["expired"] = expired;
    expired 
        ? forwarder["status"] = 'inactive' 
        : forwarder["status"] = 'active';
    res.jsonp(forwarder);
};

//Update Forwarder
exports.update = function(req, res) {
    var updateForwarder = req.forwarder;
    updateForwarder = _.extend(updateForwarder, req.body);

    updateForwarder.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateForwarder: updateForwarder
            });
        } else {
            res.jsonp(updateForwarder);
        }
    });
};
// Create Forwarder
exports.create = function(req, res) {
    var request = req.body;
    var newForwarder = new Forwarder(request);
    var validFrom = request.valid_from;
    var validTo = request.valid_to;
    newForwarder.creator = req.user;
    if(validFrom){
        newForwarder.valid_from = new Date(req.body.valid_from);
    }
    if(validTo){
        newForwarder.valid_to = new Date(req.body.valid_to);
    }
    newForwarder.save(function(err) {
        if (!err) {
            res.jsonp(newForwarder);
        } else {
            return res.send(err);
        }
    });
};


