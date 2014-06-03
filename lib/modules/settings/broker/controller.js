'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    moment = require('moment'),
    Broker = require('./schema').Broker;

// Find Broker by id
exports.broker = function(req, res, next, id) {
    Broker.load(id, function(err, broker) {
        if (err) return next(err);
        if (!broker) return next(new Error('Failed to load Broker: ' + id));
        req.broker = broker;
        next();
    });
};

//List all Broker
exports.all = function(req, res) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    Broker
        .find()
        .sort('-created')
        .populate(opts)
        .lean()
        .exec(function(err, brokers) {
            if (!err) {
                brokers = brokers.map(function(broker) {
                    broker.expired = moment(broker.valid_to).isBefore();
                    broker.expired 
                        ? broker.status = 'inactive' 
                        : broker.status = 'active';
                    return broker;
                });
                res.jsonp(brokers);
            } else {
                return res.send(err);
            }
        });
};

//List active Broker
exports.active = function(req, res) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    Broker
        .find()
        .where('status').equals('active')
        .sort('-created')
        .populate(opts)
        .exec(function(err, brokers) {
            if (!err) {
                res.jsonp(brokers);
            } else {
                return res.send(err);
            }
        });
};

//Show Broker
exports.show = function(req, res) {
    var broker = req.broker.toObject();
    var expired = moment(broker.valid_to).isBefore();
    broker["expired"] = expired;
    expired 
        ? broker["status"] = 'inactive' 
        : broker["status"] = 'active';
    res.jsonp(broker);
};

//Update Broker
exports.update = function(req, res) {
    var updateBroker = req.broker;
    updateBroker = _.extend(updateBroker, req.body);

    updateBroker.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateBroker: updateBroker
            });
        } else {
            res.jsonp(updateBroker);
        }
    });
};
// Create Broker
exports.create = function(req, res) {
    var request = req.body;
    var newBroker = new Broker(request);
    var validFrom = request.valid_from;
    var validTo = request.valid_to;
    newBroker.creator = req.user;
    if (validFrom) {
        newBroker.valid_from = new Date(req.body.valid_from);
    }
    if (validTo) {
        newBroker.valid_to = new Date(req.body.valid_to);
    }
    newBroker.save(function(err) {
        if (!err) {
            res.jsonp(newBroker);
        } else {
            return res.send(err);
        }
    });
};
