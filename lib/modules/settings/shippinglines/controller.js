'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    ShippingLine = require('./schema').ShippingLine;


// Find ShippingLine by id
exports.shippingline = function(req, res, next, id) {
    ShippingLine.load(id, function(err, shippingline) {
        if (err) return next(err);
        if (!shippingline) return next(new Error('Failed to load ShippingLine: ' + id));
        req.shippingline = shippingline;
        next();
    });
};

//List all ShippingLine
exports.all = function(req, res) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    ShippingLine
        .find()
        .sort('-created')
        .populate(opts)
        .exec(function(err, shippinglines) {
            if (!err) {
                res.jsonp(shippinglines);
            } else {
                return res.send(err);
            }
        });
};

//Show ShippingLine
exports.show = function(req, res) {
    res.jsonp(req.shippingline);
};

//Update ShippingLine
exports.update = function(req, res) {
    var updateShippingLine = req.shippingline;
    updateShippingLine = _.extend(updateShippingLine, req.body);

    updateShippingLine.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateShippingLine: updateShippingLine
            });
        } else {
            res.jsonp(updateShippingLine);
        }
    });
};
// Create ShippingLine
exports.create = function(req, res) {
    var request = req.body;
    var newShippingLine = new ShippingLine(request);
    var validFrom = request.valid_from;
    var validTo = request.valid_to;
    newShippingLine.creator = req.user;
    if(validFrom){
        newShippingLine.valid_from = new Date(req.body.valid_from);
    }
    if(validTo){
        newShippingLine.valid_to = new Date(req.body.valid_to);
    }
    newShippingLine.save(function(err) {
        if (!err) {
            res.jsonp(newShippingLine);
        } else {
            return res.send(err);
        }
    });
};


