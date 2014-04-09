'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FileEntry = new Schema({
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

module.exports = mongoose.model('FileEntry', FileEntry);
