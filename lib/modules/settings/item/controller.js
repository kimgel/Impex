'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    Item = require('./schema').Item;


// Find Item by id
exports.item = function(req, res, next, id) {
    Item.load(id, function(err, item) {
        if (err) return next(err);
        if (!item) return next(new Error('Failed to load Item: ' + id));
        req.item = item;
        next();
    });
};

//List all Item
exports.all = function(req, res) {
    var opts = [{
            path: 'supplier',
            select: 'name'
        }, {
            path: 'broker',
            select: 'name'
        }, {
            path: 'forwarder',
            select: 'name'
        }];
        Item.find()
        .sort('-created')
        .populate(opts)
        .exec(function(err, items) {
            if (!err) {
                res.jsonp(items);
            } else {
                return res.send(err);
            }
        });
};

//Show Item
exports.show = function(req, res) {
    res.jsonp(req.item);
};

//Update Item
exports.update = function(req, res) {
    var updateItem = req.item;
    updateItem = _.extend(updateItem, req.body);

    updateItem.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateItem: updateItem
            });
        } else {
            res.jsonp(updateItem);
        }
    });
};
// Create Item
exports.create = function(req, res) {
    var request = req.body;
    var newItem = new Item(request);
    newItem.creator = req.user;
    newItem.save(function(err) {
        if (!err) {
            fmt.dump(newItem, "Success");
            res.jsonp(newItem);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
