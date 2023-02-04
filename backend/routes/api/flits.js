'use strict';

const express = require('express');
const router = express.Router();
const Flit = require('../../models/Flit');


// GET /api/flits
// returns a flits array
router.get('/', async (req, res, next) => {
    try {
        const flits = await Flit.find();
        res.json({ results: flits });
    } catch(err) {
        next(err);
    }
});

// GET /api/flits/(id)
// returns one flit
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
// updates a flit
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const flitData = req.body;

        const flitUpdated = await Flit.findOneAndUpdate({ _id: id}, flitData, { new: true });

        res.json({ result: flitUpdated });

    } catch (err) {
        next(err);
    }
});

module.exports = router;

