'use strict';

const User = require('../../../models/User');

const getUser = async (id) => {
    // search for a user at the DB
    return await User.findById(id);
};

module.exports = getUser;
