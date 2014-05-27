'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    moment = require('moment'),
    Planner = require('./schema').Planner;

// Find Planner by id
exports.planner = function(req, res, next, id) {
    Planner.load(id, function(err, planner) {
        if (err) return next(err);
        if (!planner) return next(new Error('Failed to load Planner: ' + id));
        req.planner = planner;
        next();
    });
};

//List all Planner
exports.all = function(req, res) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }, {
        path: 'material',
        select: 'no'
    }];
    Planner.find()
        .sort('-created')
        .populate(opts)
        .exec(function(err, planner) {
            if (!err) {
                res.jsonp(planner);
            } else {
                return res.send(err);
            }
        });
};

//Show Planner
exports.show = function(req, res) {
    var planner = req.planner.toObject();
    var supplier = planner.material_supplier;
    var broker = planner.material_broker;
    var supplierExpired = moment(supplier.valid_to).isBefore();
    var brokerExpired = moment(broker.valid_to).isBefore();
    
    supplier["expired"] = supplierExpired;
    supplierExpired 
        ? supplier["status"] = 'inactive' 
        : supplier["status"] = 'active';

    broker["expired"] = brokerExpired;
    brokerExpired 
        ? broker["status"] = 'inactive' 
        : broker["status"] = 'active';

    res.jsonp(planner);
};


//Update Planner
exports.update = function(req, res) {
    var updatePlanner = req.planner;
    updatePlanner = _.extend(updatePlanner, req.body);

    updatePlanner.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updatePlanner: updatePlanner
            });
        } else {
            res.jsonp(updatePlanner);
        }
    });
};
// Create Planner
exports.create = function(req, res) {
    var request = req.body;
    var newPlanner = new Planner(request);
    newPlanner.creator = req.user;
    newPlanner.save(function(err) {
        if (!err) {
            fmt.dump(newPlanner, "Success");
            res.jsonp(newPlanner);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
