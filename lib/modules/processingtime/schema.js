'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var ProcessingTimeSchema = new Schema({
    item: {
        type: Schema.ObjectId,
        ref: 'Item'
    },
    ii_planner: {
        type: Number,
        default: 0
    },
    ii_broker: {
        type: Number,
        default: 0
    },
    ii_assignforwarder: {
        type: Number,
        default: 0
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


var ProcessingTime = mongoose.model('ProcessingTime', ProcessingTimeSchema);

module.exports = {
    ProcessingTime: ProcessingTime
};
