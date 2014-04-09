'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var broSchema = new Schema({
    broNo: {
        type: String
    },
    broName: {
        type: String
    },
    broAddress: {
        type: String
    },
    broContactPerson: {
        type: String
    },
    broEmail: {
        type: String
    },
    broTelNo: {
        type: String
    }
});

var Broker = mongoose.model('Broker', broSchema);

module.exports = {
    Broker: Broker
}
