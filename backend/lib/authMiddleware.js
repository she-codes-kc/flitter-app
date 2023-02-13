const jwt = require('jsonwebtoken');

const Config = require('../config');

const User = require('../models/User');

module.exports = async (req, res, next) => {
    const authorization = req.headers.authorization

    if(authorization) {
        const token = req.headers.authorization.split(' ')[1];

        try {
            const decodedToken = jwt.verify(token, Config.jwtSecret);

            const user = await User.findById(decodedToken.userId);

            if(!user && user.email !== decodedToken.email) {
                res.sendStatus(401);
                return;
            }

            req.currentUser = user;

            next();
        } catch {
            res.sendStatus(401);
            return;
        }
    } else {
        res.sendStatus(401);
        return;
    }
}
