const moment = require('moment');

const logger = (req, res, next) => {
    //everytime we make a request this middleware is going to run
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
}

module.exports = logger;