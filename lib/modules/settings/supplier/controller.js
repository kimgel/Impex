'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    Supplier = require('./schema').Supplier;


// Find Supplier by id
exports.supplier = function(req, res, next, id) {
    Supplier.load(id, function(err, supplier) {
        if (err) return next(err);
        if (!supplier) return next(new Error('Failed to load Supplier: ' + id));
        req.supplier = supplier;
        next();
    });
};

//List all Supplier
exports.all = function(req, res) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    Supplier
        .find()
        .sort('-created')
        .populate(opts)
        .exec(function(err, suppliers) {
            if (!err) {
                console.log(suppliers);
                res.jsonp(suppliers);
            } else {
                return res.send(err);
            }
        });
};

//Show Supplier
exports.show = function(req, res) {
    res.jsonp(req.supplier);
};

//Update Supplier
exports.update = function(req, res) {
    var updateSupplier = req.supplier;
    updateSupplier = _.extend(updateSupplier, req.body);

    updateSupplier.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateSupplier: updateSupplier
            });
        } else {
            res.jsonp(updateSupplier);
        }
    });
};
// Create Supplier
exports.create = function(req, res) {
    var request = req.body;
    var newSupplier = new Supplier(request);
    var validFrom = request.valid_from;
    var validTo = request.valid_to;
    newSupplier.creator = req.user;
    if(validFrom){
        newSupplier.valid_from = new Date(req.body.valid_from);
    }
    if(validTo){
        newSupplier.valid_to = new Date(req.body.valid_to);
    }
    newSupplier.save(function(err) {
        if (!err) {
            res.jsonp(newSupplier);
        } else {
            return res.send(err);
        }
    });
};


