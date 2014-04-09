'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    Broker = require('./model').Broker;

// Create Broker
exports.create = function(req, res, next) {
    //var newBroker = new Broker(req.body);
   
    fmt.dump(req.body, "Broker");
    return res.send(200);


    /*
    newBroker.save(function(err) {
        if (err) return next(err);
        return res.json(req);      
    });
	*/
};
