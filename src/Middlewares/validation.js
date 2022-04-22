const jwt = require('jsonwebtoken')

function validation(req, res, next) {
    try {
        const idReq = req.params.id
        const {authorization: token} = req.headers;
        const {id: idToken} = jwt.decode(token)
        
        if (idReq != idToken) throw new Error(
        'You don´t have permission...')
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

module.exports = validation;