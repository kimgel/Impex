'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrokerSchema = new Schema({
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
BrokerSchema
    .path('no')
    .validate(function(no) {
        return no.length;
    }, 'Broker no. cannot be blank');

BrokerSchema
    .path('name')
    .validate(function(name) {
        return name.length;
    }, 'Broker name cannot be blank');

BrokerSchema
    .path('address')
    .validate(function(address) {
        return address.length;
    }, 'Broker address cannot be blank');

BrokerSchema
    .path('tel')
    .validate(function(tel) {
        return tel.length;
    }, 'Telephone no cannot be blank');


var Broker = mongoose.model('Broker', BrokerSchema);

module.exports = {
    Broker: Broker
};
