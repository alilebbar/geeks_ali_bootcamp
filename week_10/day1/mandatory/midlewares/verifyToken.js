const jwt = require('jsonwebtoken');
require('dotenv').config();

async function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        req.user = decoded; 
        next();
    });
}

module.exports = {verifyToken};
