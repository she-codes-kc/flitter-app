'use strict';

const express = require('express');

const router = express.Router();

const loginUser = require('./controllers/loginUser');
const createUser = require('./controllers/createUser');

// POST /api/auth/login
// return auth for user
router.post('/login', async (req, res, next) => {
    try {
        const auth = await loginUser(req.body.email, req.body.password);

        res.json({ accessToken: auth });
    } catch(err) {
        next(err);
    }
});

// POST /api/auth/register (body=userData)
// return auth for user
router.post('/register', async (req, res, next) => {
    try {
        const userSaved = await createUser(req.body)

        res.json({ result: userSaved });
    } catch(err) {
        next(err);
    }
});

module.exports = router;
