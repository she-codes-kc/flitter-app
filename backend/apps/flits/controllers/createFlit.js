'use strict';

const Flit = require('../../../models/Flit');

const createFlit = async (text, author) => {
    const flit = new Flit({
        text,
        image: null,
        author,
        date: new Date(),
        kudos: [],
    });

    return await flit.save();
};

module.exports = createFlit;

