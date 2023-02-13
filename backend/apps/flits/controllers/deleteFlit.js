'use strict';

const Flit = require('../../../models/Flit');

const deleteFlit = async (id) => {

    const flit = await Flit.findById(id);

    if (!flit) {
        return next(createError(404));
    }

    await Flit.deleteOne({ _id: id, });
};

module.exports = deleteFlit;
