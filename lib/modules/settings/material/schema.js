'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var MaterialSchema = new Schema({
    no: { type: String, trim: true },
    description: { type: String, trim: true },
    type: { type: String, trim: true },
    supplier: { type: Schema.ObjectId, ref: 'Supplier'},
    broker: { type: Schema.ObjectId, ref: 'Broker' },
    forwarder: { type: Schema.ObjectId, ref: 'Forwarder' },
    shipping_line: { type: Schema.ObjectId, ref: 'ShippingLine' },
    valid_from: { type: Date },
    valid_to: { type: Date },
    documents: { type: Array },
    process_time: {
        step_one: Number,
        step_two: Number,
        step_three: Number,
        step_four: Number,
        step_five: Number,
        step_six: Number,
        step_seven: Number,
        step_eight: Number,
        step_nine: Number,
        step_ten: Number
    },
    remarks: { type: String, trim: true },
    creator: { type: Schema.ObjectId, ref: 'User' },
    created: { type: Date, default: Date.now }
});

MaterialSchema
    .path('no')
    .validate(function(no) {
        return no.length;
    }, 'Material no. cannot be blank');

MaterialSchema
    .path('description')
    .validate(function(description) {
        return description.length;
    }, 'Material description cannot be blank');

MaterialSchema
    .path('valid_from')
    .validate(function(valid_from) {
        return valid_from;
    }, 'Date cannot be blank');

MaterialSchema
    .path('valid_to')
    .validate(function(valid_to) {
        return valid_to;
    }, 'Date cannot be blank');

MaterialSchema.statics.load = function(id, cb) {
    var opts = [
        { path: 'creator', select: 'name'},
        { path: 'supplier'},
        { path: 'broker'},
        { path: 'forwarder'}
    ];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};

var Material = mongoose.model('Material', MaterialSchema);

module.exports = {
    Material: Material
};
