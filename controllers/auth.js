const jwt = require('jsonwebtoken');

module.exports = async function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');
    // Check if token present
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied"})
    }

    try {
        await jwt.verify(token, process.env.jwtSecret), (error, decode) => {
            if(error) {
                res.status(401).json({ msg: "Token not valid"})
            } else {
                req.user = decoded.user;
                next();
            }
        }
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' });
    }

}