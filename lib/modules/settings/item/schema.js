'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
    code: {
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
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

ItemSchema
    .path('code')
    .validate(function(code) {
        return code.length;
    }, 'Item code cannot be blank');

ItemSchema
    .path('description')
    .validate(function(description) {
        return description.length;
    }, 'Item description cannot be blank');

ItemSchema
    .path('valid_from')
    .validate(function(valid_from) {
        return valid_from;
    }, 'Date cannot be blank');

ItemSchema
    .path('valid_to')
    .validate(function(valid_to) {
        return valid_to;
    }, 'Date cannot be blank');

ItemSchema
    .path('documents')
    .validate(function(documents) {
        return documents.length;
    }, 'Please add required documents');

ItemSchema.statics.load = function(id, cb) {
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

var Item = mongoose.model('Item', ItemSchema);

module.exports = {
    Item: Item
};
