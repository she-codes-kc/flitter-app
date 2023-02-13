'use strict';

const Flit = require('../../../models/Flit');

const updateFlit = async (id, flitData) => {
    return await Flit.findOneAndUpdate({ _id: id}, flitData, { new: true });
};

module.exports = updateFlit;
