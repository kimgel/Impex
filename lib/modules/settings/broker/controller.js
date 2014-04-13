'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    Broker = require('./schema').Broker;

// Create Broker
exports.create = function(req, res) {
    var newBroker = new Broker(req.body);
    newBroker.creator = req.user;
    newBroker.save(function(err) {
        if (!err) {
            fmt.dump(newBroker, "Success");
            res.jsonp(newBroker);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};

//List all Broker
exports.all = function(req, res) {
    Broker.find().sort('-created').exec(function(err, brokers) {
    //Broker.find({}, function(err, brokers) {
        if (!err) {
            fmt.dump(brokers, "Success");
            res.jsonp(brokers);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
