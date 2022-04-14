const express = require('express');

const useCasesClients = require('../UseCases/clients');

const router = express.router();

router.get('/clients', async (request, response) => {
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

router.get('/clients/:id', async (request, response)=> {
    try{
        const idClient = request.params.id;
        const clientFound = await useCasesClients.getById(idClient);

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

router.patch('/clients/:id', async (request, response)=> {
    try{
        const idClient = request.params.id;
        const dataToUpdate = request.body;
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
            message: 'Error updating',
            error: error.message
        })
    }   
})

router.delete('/clients/:id', async (request, response)=> {
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

//patch reset password
router.patch('/reset-password/:id_user', async (request, response)=> {
    try{
        
        const idClient = request.params.id_user;
        const dataToUpdate = request.body;
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
            message: 'Error updating',
            error: error.message
        })
    }   
})

//post api mail
router.post('/api/mail', async (request, response) => {

    const {to, subject, text, sandboxMode = false} = request.body;
    const message = {
        to,
        from: 'cristianluru@gmail.com',
        subject,
        text,
        mail_settings:{
            sandbox_mode: {
                enable: sandboxMode
            }
        }
    }
    try{
        await sgMail.send(message);
    }catch (error) {
        return response.status(error.code).send(error.message);
    }
    response.status(201).send({
        success: true
    });
})

//post email authorization
router.post('/api/email_auth', async (request, response) => {

    const {email, firstName, lastName} = token.body;
    const message = {
        to: email,
        from: {
            name: 'cris',
            email: 'cristianluru@gmail.com'
        },
        subject: 'Email Authorization',
        template_id: 'd-8e892e5b2455490cb1ac587f86a29e46',
        dynamic_template_data: {
            firstName,
            lastName,
            token
        }
    }
    return sgMail.send(message); 
})

module.exports = router;