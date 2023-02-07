'use strict';

const mongoose = require('mongoose');

// define the schema of flits
const flitSchema = mongoose.Schema({
    text: { type: String, minlenght:1, maxlenght:256, trim: true, index: true },
    image: { type: String, index: true },
    author: { type: String, index: true }, //{ type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now, index: true },
    kudos: { type: [Number], index: true }, //[{ type: Schema.Types.ObjectId, ref: 'User' }]
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
const Flit = mongoose.model('Flit', flitSchema);

// export model
module.exports = Flit;


