'use strict';

const mongoose = require('mongoose');

// define the schema of flits
const flitSchema = mongoose.Schema({
    text: String,
    image: String,
    author: String,
    date: Date,
    kudos: [Number]
});

flitSchema.statics.array = function(filter, skip, limit) {
    const query = Flit.find(filter); 
    query.skip(skip);
    query.limit(limit);
    return query.exec() 
};


// create model
const Flit = mongoose.model('Flit', flitSchema);

// export model
module.exports = Flit;


