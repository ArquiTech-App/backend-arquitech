const jwt = require('jsonwebtoken')

function admin(req, res, next) {
    try {
        
        const {authorization: token} = req.headers;
        const {permission: permission} = jwt.decode(token)
        console.log(permission);
        if (permission !== 'admin') throw new Error(
        'You don´t have permission to Admin')
        next();

    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: 'not authorized admin',
            error: error.message
        })
        console.log(error);
    }
}
function writer(req, res, next) {
    try {
        
        const {authorization: token} = req.headers;
        const {permission: permission} = jwt.decode(token)
        console.log(permission);
        if (permission !== 'writer') throw new Error(
        'You don´t have permission to Admin')
        next();

    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: 'not authorized admin',
            error: error.message
        })
        console.log(error);
    }
}
function read(req, res, next) {
    try {
        
        const {authorization: token} = req.headers;
        const {permission: permission} = jwt.decode(token)
        console.log(permission);
        if (permission !== 'read') throw new Error(
        'You don´t have permission to Admin')
        next();

    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: 'not authorized admin',
            error: error.message
        })
        console.log(error);
    }
}
module.exports = {
    admin,
    writer,
    read
};