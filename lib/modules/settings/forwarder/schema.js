'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var ForwarderSchema = new Schema({
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
    status: {
        type: String
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
ForwarderSchema
    .path('no')
    .validate(function(no) {
        return no.length;
    }, 'Forwarder no. cannot be blank');

ForwarderSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'Forwarder name cannot be blank');

ForwarderSchema
    .path('address')
    .validate(function(address) {
        return address.length;
    }, 'Forwarder address cannot be blank');

ForwarderSchema
    .path('tel')
    .validate(function(tel) {
        return tel.length;
    }, 'Telephone no cannot be blank');

ForwarderSchema
    .path('valid_from')
    .validate(function(valid_from) {
        return valid_from;
    }, 'Date cannot be blank');

ForwarderSchema
    .path('valid_to')
    .validate(function(valid_to) {
        return valid_to;
    }, 'Date cannot be blank');

ForwarderSchema.pre('save', function(next) {
    var x = moment(this.valid_to).isBefore();
    if (!x) {
        this.status = 'active';
    } else {
        this.status = 'inactive';
    }
    next();
})

ForwarderSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('creator', 'name').exec(cb);
};

var Forwarder = mongoose.model('Forwarder', ForwarderSchema);

module.exports = {
    Forwarder: Forwarder
};
