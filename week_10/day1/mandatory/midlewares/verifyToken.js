const jwt = require('jsonwebtoken');
require('dotenv').config();

async function verifyToken(req, res, next) {
    const token = req.cookies.accessToken;
    if (!token) {
        const error = new Error('token invalid');
        error.status = 401;
        return next(error);
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            const error = new Error('token invalid ou expirer');
            error.status = 401;
            return next(error);
        }
        req.user = decoded; 
        next();
    });
}



module.exports = {verifyToken};
