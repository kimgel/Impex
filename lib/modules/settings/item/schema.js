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
        default: 'active' //
    },
    /*

        validity date
    documents: {
        type: Array,
        default: []
    },
    */
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


ItemSchema.statics.load = function(id, cb) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }, {
        path: 'supplier',
        select: 'name'
    }, {
        path: 'broker',
        select: 'name'
    }, {
        path: 'forwarder',
        select: 'name'
    }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};

var Item = mongoose.model('Item', ItemSchema);

module.exports = {
    Item: Item
};