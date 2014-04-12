'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    Broker = require('./schema').Broker;

// Create Broker
exports.create = function(req, res, next) {
    var newBroker = new Broker(req.body);   
    newBroker.user = req.user;
    newBroker.save(function(err) {
        if (err) {
        	fmt.dump(err, "Error");
            return res.send(err);

        } else {
        	fmt.dump(newBroker, "Success");
            res.jsonp(newBroker);
        }
    });
};
