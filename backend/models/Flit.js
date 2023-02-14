'use strict';

const mongoose = require('mongoose');
const User = require('../models/User');

// define the schema of flits
const flitSchema = mongoose.Schema({

    text: { type: String, minlenght:1, maxlenght:256, required: true, trim: true, sparse: true },
    image: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: User, sparse: true, required: true },
    date: { type: Date, default: Date.now(), sparse: true },
    kudos: [{ type: mongoose.Schema.Types.ObjectId, ref: User }]
});

flitSchema.statics.array = function(filter, skip, limit, fields, sort) {
    const query = Flit
        .find(filter).populate({
            path: 'author',
            select: '_id username firstName lastName'
        })
        .populate({
            path:  'kudos',
            select: '_id username'
        })
        .select('text image author date');
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec()
};


// create model
const Flit = mongoose.model('Flit', flitSchema);

// export model
module.exports = Flit;


