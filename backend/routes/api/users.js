'use strict';

const express = require('express');
const createError = require('http-errors');
const User = require('../../models/User');

const router = express.Router();


// GET /api/users
// return users array
router.get('/', async (req, res, next) => {
    try {

        // filters
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;
        const username = req.query.username;

        // pagination 
        const skip = req.query.skip; // /api/users?skip=0&limit=1
        const limit = req.query.limit;

        // selection fields 
        const fields = req.query.fields; // /api/users?fields=username -_id

        // sort
        const sort = req.query.sort; // /api/users?sort=-username (desc)


        const filter = {};

        if (firstName) { // /api/users?firstName=<whatever>
            filter.firstName = new RegExp('^' + firstName, 'i');
        };

        if (lastName) { // /api/users?lastName=<whatever>
            filter.lastName = new RegExp('^' + lastName, 'i');
        };

        if (username) { // /api/users?username=<whatever>
            filter.username = username;
        }
 
        const users = await User.array(filter, skip, limit, fields, sort);
        res.json({ results: users });
    } catch(err) {
        next(err);
    }
});

// GET /api/users/(id)
// return one user
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
    
        // search for a user at the DB
        const user = await User.findById(id);

        res.json({ result: user })

    } catch (err) {
        next(err);
    }
});

// PUT /api/users/(id) (body=userData)
// update a user
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const userData = req.body;

        const userUpdated = await User.findOneAndUpdate({ _id: id}, userData, { new: true });

        res.json({ result: userUpdated });

    } catch (err) {
        next(err);
    }
});

// POST /api/users (body=userData)
// create a user
router.post('/', async (req, res, next) => {
    try {
        const userData = req.body;

        const user= new User(userData);

        const userSaved = await user.save();

        res.json({ results: userSaved });
    } catch(err) {
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

module.exports = router;

