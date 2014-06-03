'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var RegulatoryDocSchema = new Schema({
    license_no: {
        type: String,
        default: '',
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    date_issued: {
        type: Date,
        default: null
    },
    valid_until: {
        type: Date,
        default: null
    },
    document_data: {
        type: Schema.Types.Mixed,
        default: []
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
RegulatoryDocSchema
    .path('license_no')
    .validate(function(license_no) {
        return license_no.length;
    }, 'License No. cannot be blank');

RegulatoryDocSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'Name cannot be blank');

RegulatoryDocSchema
    .path('date_issued')
    .validate(function(date_issued) {
        return date_issued;
    }, 'Date Issued cannot be blank');

RegulatoryDocSchema
    .path('valid_until')
    .validate(function(valid_until) {
        return valid_until;
    }, 'Valid Until cannot be blank');


RegulatoryDocSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('creator', 'name').exec(cb);
};

var RegulatoryDoc = mongoose.model('RegulatoryDoc', RegulatoryDocSchema);

module.exports = {
    RegulatoryDoc: RegulatoryDoc
};
