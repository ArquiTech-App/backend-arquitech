require('dotenv').config();
const jwt = require('jsonwebtoken');


const JWT_SECRET = process.env.JWT_SECRET;

const sing = (payload) => {
    console.log(payload);
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