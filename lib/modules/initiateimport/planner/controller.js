'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
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
            path: 'item'
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
    res.jsonp(req.planner);
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
