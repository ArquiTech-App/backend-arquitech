const express = require('express');

const useCasesAutodesk = require('../UseCases/autodesk');

const router = express.Router();

router.get('/forge/oauth/public', (req, res) => {
    useCasesAutodesk.publicAuthorization(res)
})

module.exports = router;