'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocumentSchema = new Schema({
    url: {
        type: String
    },
    name: {
        type: String
    },
    secret: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Document = mongoose.model('Document', DocumentSchema);

module.exports = {
    Document: Document
};
