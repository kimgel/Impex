'use strict';

var mongoose = require('mongoose'),
    fmt = require('fmt'),
    _ = require('lodash'),
    moment = require('moment'),
    Material = require('./schema').Material;


// Find Material by id
exports.material = function(req, res, next, id) {
    if (req.query.searchCode) {
        /*
        Material.findOne({ 'code': id },function(err,material){
            if (err) return next(err);
            if (!material) return next(new Error('Material not found.'));
            req.material = material;            
            next();
        });
        */
        var opts = [{
            path: 'supplier'
        }, {
            path: 'broker'
        }, {
            path: 'forwarder'
        }];
        Material.findOne({ 'no': id })
            .sort('-created')
            .populate(opts)
            .exec(function(err, materials) {
                if (!err) {
                    if(materials){
                        res.jsonp(materials);
                    } else {                        
                        return next(new Error('Material not found.'));
                    }
                    
                } else {
                    return res.send(err);
                }
            });


    } else {
        Material.load(id, function(err, material) {
            if (err) return next(err);
            if (!material) return next(new Error('Failed to load Material: ' + id));
            req.material = material;
            next();
        });
    }

};


//List all Material
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
    Material.find()
        .sort('-created')
        .populate(opts)
        .lean()
        .exec(function(err, materials) {
            if (!err) {
                materials = materials.map(function(material) {
                    material.expired = moment(material.valid_to).isBefore();
                    material.expired 
                        ? material.status = 'inactive' 
                        : material.status = 'active';
                    return material;
                });
                res.jsonp(materials);
            } else {
                return res.send(err);
            }
        });
};

//Show Material
exports.show = function(req, res) {
    var material = req.material.toObject();
    var expired = moment(material.valid_to).isBefore();
    material["expired"] = expired;
    expired 
        ? material["status"] = 'inactive' 
        : material["status"] = 'active';
    res.jsonp(material);
};

//Update Material
exports.update = function(req, res) {
    var updateMaterial = req.material;
    updateMaterial = _.extend(updateMaterial, req.body);

    updateMaterial.save(function(err) {
        if (err) {
            return res.send('login', {
                errors: err.errors,
                updateMaterial: updateMaterial
            });
        } else {
            res.jsonp(updateMaterial);
        }
    });
};
// Create Material
exports.create = function(req, res) {
    var request = req.body;
    var newMaterial = new Material(request);
    newMaterial.creator = req.user;
    newMaterial.save(function(err) {
        if (!err) {
            fmt.dump(newMaterial, "Success");
            res.jsonp(newMaterial);
        } else {
            fmt.dump(err, "Error");
            return res.send(err);
        }
    });
};
