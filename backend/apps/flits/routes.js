'use strict';

const express = require('express');
const createError = require('http-errors');
const router = express.Router();

const Flit = require('../../models/Flit');

const authMiddleware = require('../../lib/authMiddleware')

const getFlits = require('./controllers/getFlits')
const getFlit = require('./controllers/getFlit');
const updateFlit = require('./controllers/updateFlit');
const createFlit = require('./controllers/createFlit');

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
router.put('/:id', async (req, res, next) => {
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
        const text = req.body.text;

        const author = req.currentUser;

        const flit = new Flit({
            text,
            image: null,
            author,
            date: new Date(),
            kudos: [],
        });

        const flitSaved = await flit.save();

        res.json(flitSaved);
    } catch(err) {
        next(err);
    }
});

// router.post('/', authMiddleware, async (req, res, next) => {
//     try {
//         const flitSaved = await createFlit(req.body.text, req.currentUser);

//         res.json(flitSaved);

//     } catch(err) {
//         next(err);
//     }
// });

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

// router.delete('/:id', async (req, res, next) => {
//     try {
//        await deleteFlit(req.params.id);

//         res.json();

//     } catch (err) {
//         next(err);
//     }
// });

module.exports = router;
