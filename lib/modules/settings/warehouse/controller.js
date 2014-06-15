'use strict';

var mongoose = require('mongoose'),
    _ = require('lodash'),
    moment = require('moment'),
    Warehouse = require('./schema').Warehouse;

// Find Warehouse by id
exports.warehouse = function(req, res, next, id) {
    Warehouse.load(id, function(err, warehouse) {
        if (err) return next(err);
        if (!warehouse) return next(new Error('Failed to load Warehouse: ' + id));
        req.warehouse = warehouse;
        next();
    });
};

//List all Warehouse
exports.all = function(req, res) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    Warehouse
        .find()
        .sort('-created')
        .populate(opts)
        .lean()
        .exec(function(err, warehouses) {
            if (!err) {
                warehouses = warehouses.map(function(warehouse) {
                    warehouse.expired = moment(warehouse.valid_to).isBefore();
                    warehouse.expired 
                        ? warehouse.status = 'inactive' 
                        : warehouse.status = 'active';
                    return warehouse;
                });
                res.jsonp(warehouses);
            } else {
                return res.send(err);
            }
        });
};

//List active Warehouse
exports.active = function(req, res) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }];
    Warehouse
        .find()
        .where('status').equals('active')
        .sort('-created')
        .populate(opts)
        .exec(function(err, warehouses) {
            if (!err) {
                res.jsonp(warehouses);
            } else {
                return res.send(err);
            }
        });
};

//Show Warehouse
exports.show = function(req, res) {
    var warehouse = req.warehouse.toObject();
    var expired = moment(warehouse.valid_to).isBefore();
    warehouse["expired"] = expired;
    expired 
        ? warehouse["status"] = 'inactive' 
        : warehouse["status"] = 'active';
    res.jsonp(warehouse);
};

//Update Warehouse
exports.update = function(req, res) {
    var updateWarehouse = req.warehouse;
    updateWarehouse = _.extend(updateWarehouse, req.body);

    updateWarehouse.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateWarehouse: updateWarehouse
            });
        } else {
            res.jsonp(updateWarehouse);
        }
    });
};
// Create Warehouse
exports.create = function(req, res) {
    var request = req.body;
    var newWarehouse = new Warehouse(request);
    var validFrom = request.valid_from;
    var validTo = request.valid_to;
    newWarehouse.creator = req.user;
    if (validFrom) {
        newWarehouse.valid_from = new Date(req.body.valid_from);
    }
    if (validTo) {
        newWarehouse.valid_to = new Date(req.body.valid_to);
    }
    newWarehouse.save(function(err) {
        if (!err) {
            res.jsonp(newWarehouse);
        } else {
            return res.send(err);
        }
    });
};
