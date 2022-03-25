const jwt = require('jsonwebtoken');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const sing = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '1d'})
}

const verify = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    ...jwt, 
    sing, 
    verify
}