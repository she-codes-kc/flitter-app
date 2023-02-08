'use strict';

const mongoose = require('mongoose');

// define the schema of users
const userSchema = mongoose.Schema({

    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: 'avatar.jpg' },
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],

});

userSchema.statics.array = function(filter, skip, limit, fields, sort) {
    const query = User.find(filter); 
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec() 
};


// create model
const User = mongoose.model('User', userSchema);

// export model
module.exports = User;


