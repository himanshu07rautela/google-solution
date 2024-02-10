const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../secret');

// Middleware to verify JWT token
function verifytoken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({
        msg: "no token provided,signin first"
    }); // No token provided

    jwt.verify(token, JWT_KEY, (err, user) => {
        if (err) return res.status(403).send("invalid token"); // Invalid token
        req.user = user;
        next(); // Proceed to the next middleware
    });
};



module.exports=verifytoken;
