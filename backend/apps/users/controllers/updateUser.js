'use strict';

const User = require('../../../models/User');

const updateUser = async (id, userData) => {
    return await User.findOneAndUpdate({ _id: id}, userData, { new: true });
};

module.exports = updateUser;
