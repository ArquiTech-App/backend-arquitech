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
            message: 'not authorized',
            error: error.message
        })
        console.log(error);
    }
}
function readAndWrite(req, res, next) {
    try {
        
        const {authorization: token} = req.headers;
        const {permission: permission} = jwt.decode(token)
        console.log(permission);
        if (permission !== 'readAndWrite') throw new Error(
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
function readOnly(req, res, next) {
    try {
        
        const {authorization: token} = req.headers;
        const {permission: permission} = jwt.decode(token)
        console.log(permission);
        if (permission !== 'readOnly') throw new Error(
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
    readAndWrite,
    readOnly

};