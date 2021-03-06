'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var ShippingLineSchema = new Schema({
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
ShippingLineSchema
    .path('no')
    .validate(function(no) {
        return no.length;
    }, 'Shipping Line no. cannot be blank');

ShippingLineSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'Shipping Line name cannot be blank');

ShippingLineSchema
    .path('address')
    .validate(function(address) {
        return address.length;
    }, 'Shipping Line address cannot be blank');

ShippingLineSchema
    .path('tel')
    .validate(function(tel) {
        return tel.length;
    }, 'Telephone no cannot be blank');

ShippingLineSchema
    .path('valid_from')
    .validate(function(valid_from) {
        return valid_from;
    }, 'Date cannot be blank');

ShippingLineSchema
    .path('valid_to')
    .validate(function(valid_to) {
        return valid_to;
    }, 'Date cannot be blank');

ShippingLineSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('creator', 'name').exec(cb);
};

var ShippingLine = mongoose.model('ShippingLine', ShippingLineSchema);

module.exports = {
    ShippingLine: ShippingLine
};
