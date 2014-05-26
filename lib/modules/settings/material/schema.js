'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var MaterialSchema = new Schema({
    no: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    regulatory: {
        type: String,
        default: '',
        trim: true
    },
    type: {
        type: String,
        default: '',
        trim: true
    },
    supplier: {
        type: Schema.ObjectId,
        ref: 'Supplier'
    },
    broker: {
        type: Schema.ObjectId,
        ref: 'Broker'
    },
    forwarder: {
        type: Schema.ObjectId,
        ref: 'Forwarder'
    },
    valid_from: {
        type: Date,
        default: null
    },
    valid_to: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        default: 'active'
    },
    documents: {
        type: Array,
        default: []
    },
    schedule: {
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

MaterialSchema
    .path('documents')
    .validate(function(documents) {
        return documents.length;
    }, 'Please add required documents');

MaterialSchema.statics.load = function(id, cb) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }, {
        path: 'supplier'
    }, {
        path: 'broker'
    }, {
        path: 'forwarder'
    }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};

var Material = mongoose.model('Material', MaterialSchema);

module.exports = {
    Material: Material
};
