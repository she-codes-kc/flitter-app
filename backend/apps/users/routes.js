'use strict';

const express = require('express');
const createError = require('http-errors');

const authMiddleware = require('../../lib/authMiddleware')

// Models
const User = require('../../models/User');

// Controllers
const getUser = require('./controllers/getUser');
const updateUser = require('./controllers/updateUser');
const deleteUser = require('./controllers/deleteUser');

const router = express.Router();


// GET /api/users/(id)
// return one user
router.get('/:id', async (req, res, next) => {
    try {
        const user = await getUser(req.params.id)

        res.json({ result: user })

    } catch (err) {
        next(err);
    }
});

// PUT /api/users/(id) (body=userData)
// update a user
router.put('/:id', async (req, res, next) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body)

        res.json({ result: updatedUser });

    } catch (err) {
        next(err);
    }
});

// DELETE /api/users/(id)
// delete a user
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await User.findById(id);

        if (!user) {
            return next(createError(404));
        }

        await User.deleteOne({ _id: id, });

        res.json();

    } catch (err) {
        next(err);
    }
});

// router.delete('/:id', async (req, res, next) => {
//     try {
//         await deleteUser(req.params.id);

//         res.json();

//     } catch (err) {
//         next(err);
//     }
// });

module.exports = router;

