'use strict';

const createError = require('http-errors');

const Flit = require('../../../models/Flit');

const deleteFlit = async (id, next) => {

    const flit = await Flit.findById(id);

    if (!flit) {
        return next(createError(404));
    }

    await Flit.deleteOne({ _id: id, });
};

module.exports = deleteFlit;
