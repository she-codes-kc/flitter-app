'use strict';

const express = require('express');
const authMiddleware = require('../../lib/authMiddleware')

// Models
const User = require('../../models/User');

// Controllers
const getUser = require('./controllers/getUser');
const updateUser = require('./controllers/updateUser');
const deleteUser = require('./controllers/deleteUser');

const router = express.Router();

router.get('/me', authMiddleware, async (req, res, next) => {
    res.json(req.currentUser);
});

// GET /api/users/(username)
// return one user
router.get('/:username', async (req, res, next) => {
    try {
        const user = await getUser(req.params.username)

        res.json({ result: user })

    } catch (err) {
        next(err);
    }
});

// PUT /api/users/(id) (body=userData)
// update a user
router.put('/:id', authMiddleware, async (req, res, next) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body)

        res.json({ result: updatedUser });

    } catch (err) {
        next(err);
    }
});

// DELETE /api/users/(id)
// delete a user
router.delete('/:id', authMiddleware, async (req, res, next) => {
    try {
        await deleteUser(req.params.id, next);

        res.json();

    } catch (err) {
        next(err);
    }
});

module.exports = router;

