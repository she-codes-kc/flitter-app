'use strict';

const mongoose = require('mongoose');
const User = require('../models/User');
// const Kudo = require('../models/Kudo');

// define the schema of flits
const flitSchema = mongoose.Schema({

    text: { type: String, minlenght:1, maxlenght:256, trim: true, sparse: true },
    image: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: User, sparse: true },
    date: { type: Date, default: Date.now, sparse: true },
    // kudos: [{ type: mongoose.Schema.Types.ObjectId, ref: Kudo }]
    kudos: { type: [Number] }
});

flitSchema.statics.array = function(filter, skip, limit, fields, sort) {
    const query = Flit.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec()
};


// create model
const Flit = mongoose.model('PublicFlits', flitSchema);

// export model
module.exports = Flit;


