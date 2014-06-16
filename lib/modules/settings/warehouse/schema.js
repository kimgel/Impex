'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var WarehouseSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    },
    address: {
        type: String,
        default: '',
        trim: true
    },
    tel: {
        type: String,
        default: '',
        trim: true
    },
    contact: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    valid_from: {
        type: Date,
        default: null
    },
    valid_to: {
        type: Date,
        default: null
    },
    remarks: {
        type: String,
        default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

//Async validations
WarehouseSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'Warehouse name cannot be blank');

WarehouseSchema
    .path('address')
    .validate(function(address) {
        return address.length;
    }, 'Warehouse address cannot be blank');

WarehouseSchema
    .path('tel')
    .validate(function(tel) {
        return tel.length;
    }, 'Telephone no cannot be blank');

WarehouseSchema
    .path('valid_from')
    .validate(function(valid_from) {
        return valid_from;
    }, 'Date cannot be blank');

WarehouseSchema
    .path('valid_to')
    .validate(function(valid_to) {
        return valid_to;
    }, 'Date cannot be blank');

WarehouseSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('creator', 'name').exec(cb);
};

var Warehouse = mongoose.model('Warehouse', WarehouseSchema);

module.exports = {
    Warehouse: Warehouse
};
