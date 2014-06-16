'use strict';

var mongoose = require('mongoose'),
    jsonSelect = require('mongoose-json-select'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var RegulatoryDocSchema = new Schema({
    document_no: { type: String, trim: true },
    name: { type: String, trim: true },
    date_issued: { type: Date },
    valid_until: { type: Date },
    document_data: { type: Schema.Types.Mixed },
    remarks: { type: String, trim: true },
    creator: { type: Schema.ObjectId, ref: 'User'},
    created: { type: Date, default: Date.now }
});

//Async validations
RegulatoryDocSchema
    .path('document_no')
    .validate(function(document_no) {
        return document_no.length;
    }, 'Document No. cannot be blank');

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

// Virtual - Status field
RegulatoryDocSchema
    .virtual('status')
    .get(function() {
        var isExpired = moment(this.valid_until).isBefore();
        return isExpired ? 'expired' : 'active';
    });

RegulatoryDocSchema.plugin(jsonSelect);
RegulatoryDocSchema.set('toJSON', { virtuals: true });

RegulatoryDocSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('creator', 'name').exec(cb);
};

var RegulatoryDoc = mongoose.model('RegulatoryDoc', RegulatoryDocSchema);

module.exports = {
    RegulatoryDoc: RegulatoryDoc
};
