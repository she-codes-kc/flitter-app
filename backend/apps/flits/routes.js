'use strict';

const express = require('express');
const router = express.Router();

const authMiddleware = require('../../lib/authMiddleware')

// Models
const Flit = require('../../models/Flit');

// Controllers
const getFlits = require('./controllers/getFlits')
const getFlit = require('./controllers/getFlit');
const updateFlit = require('./controllers/updateFlit');
const createFlit = require('./controllers/createFlit');
const deleteFlit = require('./controllers/deleteFlit')

// GET /api/flits
// return flits array
router.get('/', async (req, res, next) => {
    try {
        const flits = await getFlits(req.query);

        res.json({ results: flits });
    } catch(err) {
        next(err);
    }
});

// GET /api/flits/(id)
// return one flit
router.get('/:id', async (req, res, next) => {
    try {
        const flit = await getFlit(req.params.id);

        res.json({ result: flit })
    } catch (err) {
        next(err);
    }
});

// PUT /api/flits/(id) (body=flitData)
// update a flit
router.put('/:id', authMiddleware, async (req, res, next) => {
    try {
        const flitUpdated = await updateFlit(req.params.id, req.body)

        res.json({ result: flitUpdated });

    } catch (err) {
        next(err);
    }
});

// POST /api/flits (body=flitData)
// create a flit
router.post('/', authMiddleware, async (req, res, next) => {
    try {
        const flitSaved = await createFlit(req.body.text, req.currentUser);

        res.json(flitSaved);
    } catch(err) {
        next(err);
    }
});

// DELETE /api/flits/(id)
// delete a flit
router.delete('/:id', authMiddleware, async (req, res, next) => {
    try {
        await deleteFlit(req.params.id, next);

        res.json();
    } catch (err) {
        next(err);
    }
});

module.exports = router;
