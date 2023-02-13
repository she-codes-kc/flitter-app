'use strict';

const Flit = require('../../../models/Flit');

const getFlit = async (id) => {
    // search for a flit at the DB
    return await Flit.findById(id);
};

module.exports = getFlit;
