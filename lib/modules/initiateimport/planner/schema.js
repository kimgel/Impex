'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var PlannerSchema = new Schema({
    po_number: {
        type: String,
        default: '',
        trim: true
    },
    po_date: {
        type: Date,
        default: null
    },
    material: {
        type: Schema.ObjectId,
        ref: 'Material'
    },
    material_supplier: {
        type: Schema.ObjectId,
        ref: 'Supplier'
    },
    material_broker: {
        type: Schema.ObjectId,
        ref: 'Broker'
    },
    eta: {
        type: Date,
        default: null
    },
    etd: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        default: 'on going'
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

PlannerSchema.pre('save', function(next) {
    var x = moment(this.etd).isBefore();
    if (!x) {
        this.status = 'on going';
    } else {
        this.status = 'delayed';
    }
    next();
});

PlannerSchema.statics.load = function(id, cb) {
    var opts = [{
        path: 'creator',
        select: 'name'
    }, {
        path: 'material'
    }, {
        path: 'material_supplier'
    }, {
        path: 'material_broker'
    }];
    this.findOne({
        _id: id
    }).populate(opts).exec(cb);
};



var Planner = mongoose.model('Planner', PlannerSchema);

module.exports = {
    Planner: Planner
};
