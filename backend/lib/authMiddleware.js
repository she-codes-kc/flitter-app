const basicAuth = require('basic-auth');

module.exports = (req, res, next) => {

    const user = basicAuth(req);

    // search on the database the user and check its credentials

    if (!user || user.name !== 'admin' || user.pass !== '1234') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization required');
        res.sendStatus(401);
        return;
    }

    next();
}