const jwt = require('jsonwebtoken');

module.exports = async function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');
    // Check if token present
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied"})
    }

}