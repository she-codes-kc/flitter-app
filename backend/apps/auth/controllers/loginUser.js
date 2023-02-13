'use strict';

const jwt = require('jsonwebtoken');
const Config = require('../../../config');
const User = require('../../../models/User');

const loginUser = async (email, password) => {
    try{
        const user =  await User.findOne({email: email, password: password});

        return jwt.sign(
            { userId: user._id, email: user.email},
            Config.jwtSecret,
            { expiresIn: '1w'}
        )
    } catch {
        return false;
    }
};

module.exports = loginUser;
