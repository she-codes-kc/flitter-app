'use strict';

const User = require('../../../models/User');

const createUser = async (userData) => {
    const {username, email} = userData;

    if (await User.exists({username})) {
        throw new Error("El usuario ya existe");
    }
    if (await User.exists({email})) {
        throw new Error("El email ya existe");
    }

    const user= new User(userData);

    return await user.save();
};

module.exports = createUser;
