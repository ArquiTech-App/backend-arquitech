const express = require('express');
const {decode} = require('../Lib/jwt')
const useCasesClients = require('../UseCases/clients')
const auth = require('../Middlewares/auth')

const router = express.Router();

router.get('/', async (request, response) => {
    try{
        
        const allClients = await useCasesClients.getClients()

        response.json({
            success: true,
            message: 'allClients',
            data: {
                clients: allClients,
            }
        })

    } catch (error) {

        response.status(400)
        response.json({
            success: false,
            message: 'error at get all clients',
            error: error.message
        })
    }
})

router.get('/:id', async (request, response)=> {
    try{
        const idClient = request.params.id;
        const clientFound = await useCasesClients.getById(idClient);
        console.log(idClient);
        if(!clientFound) throw new Error("Client not found");
        response.json({
            success: true,
            message: "Client found",
            data: {
                clients: clientFound
            }
        })

    } catch (error) {
        response.status(404)
        response.json({
            success: false,
            message: "Client not found",
            error: error.message
        })
    }   
})


router.post('/createClient', async (request, response) => {

    try{
        const dataClients = request.body
        const clientCreated = await useCasesClients.create(dataClients)
        
        response.status(200)
        response.json({
            success: true,
            message: 'Client Created'
        })

    } catch (error) {

        response.status(404)
        response.json({
            success: false,
            message: 'Error Updating',
            error: error.message
        })
    }  
})

router.patch('/:id', async (request, response)=> {
    try{
        const idClient = request.params.id;
        const dataToUpdate = request.body;
        console.log(idClient);
        console.log(dataToUpdate);
        const client = await useCasesClients.updateData(idClient, dataToUpdate);

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
            message: 'Error updating q',
            error: error.message
        })
    }   
})

router.delete('/:id', async (request, response)=> {
    try{
        const idClient = request.params.id;
        const deleteClient = await useCasesClients.deleteById(idClient)

        response.json({
            success: true,
            message: 'Delete Client',
            data:{
                clients: deleteClient
            }
        })

    } catch (error) {
        
        response.status(400)
        response.json({
            success: false,
            message: 'Error Deleting id Client',
            error: error.message
        })
    }  
})



// Login 
router.post('/login', async (request, response)=>{
    try {
        const {email, password} = request.body;
        console.log(email, password);
        const token = await useCasesClients.login(email, password);

        response.json({
            success: true, 
            message: 'Login succesfully',
            data:{
                token
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not register',
            error: error.message
        })
    }
})

router.get('/office/:id', async (request, response)=> {
    try {
        const idOffice = request.params.id;
        const getClients = useCasesClients.getForIdOffice(idOffice);
        res.json({
            success: true,
            message: 'get client for offices',
            data: {
                clients: getClients
            }
        })
    } catch (error) {
        res.status(400);
        res.json({
            success: false,
            error: error.message,
            message: 'Clients not Found'
        })
    }
})
router.patch('uploadFile/:id', async (request, response)=> {
    
    try {
        const id = request.params.id;
        const body = request.body;
        
        
    } catch (error) {
        
    }
})


module.exports = router;