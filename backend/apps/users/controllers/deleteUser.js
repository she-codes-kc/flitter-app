'use strict';

const User = require('../../../models/User');

const deleteUser = async (id) => {

    const user = await User.findById(id);

    if (!user) {
        return next(createError(404));
    }

    await User.deleteOne({ _id: id, });
};

module.exports = deleteUser;
