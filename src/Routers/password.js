const express = require('express');
const useCasesClients = require('../UseCases/clients');
const {decode} = require('../Lib/jwt')

const router = express.Router();

//patch reset password
router.patch('/restartPassword', async (request, response)=> {
    try{
        
        const token = request.query.token;
        const userID = decode(token);
        const idClient = userID.id;
        const dataToUpdate = request.body;
        const client = await useCasesClients.updatePasword(idClient, dataToUpdate);

        if(!client) throw new Error('Client Not Found');
        response.json({
            success: true,
            message: 'Client Updated Successfully',
            data:{
                clients: client
            }
        })

    } catch (error) {

        response.status(404)
        response.json({
            success: false,
            message: 'Error updating password',
            error: error.message
        })
    }   
})

module.exports = router;