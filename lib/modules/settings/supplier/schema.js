'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var SupplierSchema = new Schema({
    no: {
        type: String,
        default: '',
        trim: true
    },
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
    country_origin: {
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
SupplierSchema
    .path('no')
    .validate(function(no) {
        return no.length;
    }, 'Supplier no. cannot be blank');

SupplierSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'Supplier name cannot be blank');

SupplierSchema
    .path('address')
    .validate(function(address) {
        return address.length;
    }, 'Supplier address cannot be blank');

SupplierSchema
    .path('tel')
    .validate(function(tel) {
        return tel.length;
    }, 'Telephone no cannot be blank');

SupplierSchema
    .path('valid_from')
    .validate(function(valid_from) {
        return valid_from;
    }, 'Date cannot be blank');

SupplierSchema
    .path('valid_to')
    .validate(function(valid_to) {
        return valid_to;
    }, 'Date cannot be blank');

SupplierSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('creator', 'name').exec(cb);
};

var Supplier = mongoose.model('Supplier', SupplierSchema);

module.exports = {
    Supplier: Supplier
};
