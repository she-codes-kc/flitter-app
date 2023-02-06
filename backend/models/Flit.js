'use strict';

const mongoose = require('mongoose');

// define the schema of flits
const flitSchema = mongoose.Schema({
    text: { type: String, minlenght:1, maxlenght:256, index: true },
    image: { type: String, index: true },
    author: { type: String, unique: true },
    date: { type: Date, default: Date.now, index: true },
    kudos: { type: [Number], default: 0, index: true }
});

flitSchema.statics.array = function(filter, skip, limit, fields) {
    const query = Flit.find(filter); 
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    return query.exec() 
};


// create model
const Flit = mongoose.model('Flit', flitSchema);

// export model
module.exports = Flit;


