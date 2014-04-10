'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var broSchema = new Schema({
    no: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String
    },
    tel: {
        type: String
    }
});

var Broker = mongoose.model('Broker', broSchema);

module.exports = {
    Broker: Broker
}
