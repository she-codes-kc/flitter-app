'use strict';

const express = require('express');
const createError = require('http-errors');
const Flit = require('../../models/Flit');

const router = express.Router();


// GET /api/flits
// return flits array
router.get('/', async (req, res, next) => {
    try {

        // filters
        const text = req.query.text;
        const author = req.query.author;
        const date = req.query.date;

        // pagination 
        const skip = req.query.skip; // /api/flits?skip=0&limit=1
        const limit = req.query.limit;

        // selection fields 
        const fields = req.query.fields; // /api/flits?fields=author -_id

        // sort
        const sort = req.query.sort; // /api/flits?sort=-date (desc)


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
 
        const flits = await Flit.array(filter, skip, limit, fields, sort);
        res.json({ results: flits });
    } catch(err) {
        next(err);
    }
});

// GET /api/flits/(id)
// return one flit
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
    
        // search for a flit at the DB
        const flit = await Flit.findById(id);

        res.json({ result: flit })

    } catch (err) {
        next(err);
    }
});

// PUT /api/flits/(id) (body=flitData)
// update a flit
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const flitData = req.body;

        const flitUpdated = await Flit.findOneAndUpdate({ _id: id}, flitData, { new: true });

        res.json({ result: flitUpdated });

    } catch (err) {
        next(err);
    }
});

// POST /api/flits (body=flitData)
// create a flit
router.post('/', async (req, res, next) => {
    try {
        const flitData = req.body;

        const flit = new Flit(flitData);

        const flitSaved = await flit.save();

        res.json({ results: flitSaved });
    } catch(err) {
        next(err);
    }
});

// DELETE /api/flits/(id)
// delete a flit
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const flit = await Flit.findById(id);

        if (!flit) {
            return next(createError(404));
        }

        await Flit.deleteOne({ _id: id, });

        res.json();

    } catch (err) {
        next(err);
    }
});

module.exports = router;

