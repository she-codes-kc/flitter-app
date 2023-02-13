'use strict';

const Flit = require('../../../models/Flit');

const getFlits = async (query) => {
    // filters
    const text = query.text;
    const author = query.author;
    const date = query.date;

    // pagination
    const skip = query.skip; // /api/flits?skip=0&limit=1
    const limit = query.limit;

    // selection fields
    const fields = query.fields; // /api/flits?fields=author -_id

    // sort
    const sort = query.sort; // /api/flits?sort=-date (desc)


    const filter = {};

    if (text) { // /api/flits?text=<whatever>
        filter.text = new RegExp('^' + text, 'i');
    };

    if (author) { // /api/flits?author=<@username>
        filter.author = author;
    };

    if (date) { // /api/flits?date=<00/00/0000>
        filter.date = date;
    }

    return await Flit.array(filter, skip, limit, fields, sort);
}

module.exports = getFlits;
