const express = require('express');

const useCasesOffice = require('../UseCases/office')

const router = express.router();

router.get('/office', async (request, response) => {
    try{
        
        const allOffices = await useCasesOffice.getOffices()

        response.json({
            success: true,
            message: 'allOffices',
            data: {
                office: allOffices,
            }
        })

    } catch (error) {

        response.status(400)
        response.json({
            success: false,
            message: 'error at get all offices',
            error: error.message
        })
    }
})

router.get('/office/:id', async (request, response)=> {
    try{
        const idOffice = request.params.id;
        const officeFound = await useCasesOffice.getById(idOffice);

        if(!officeFound) throw new Error("Office not found");
        response.json({
            success: true,
            message: "Office found",
            data: {
                office: officeFound
            }
        })

    } catch (error) {
        response.status(404)
        response.json({
            success: false,
            message: "Office not found",
            error: error.message
        })
    }   
})

//contraseña encriptada
router.post('/office', async (request, response)=> {
    try{
        const officeToCreate = request.body
        const officeCreated = await useCasesOffice.create(officeToCreate);

        response.json({
            success: true,
            message: 'Office Created',
        })

    } catch (error) {

        response.status(400)
        response.json({
            success: false,
            message: 'Error at Create Office',
            error: error.message
        })
    }    
})

router.patch('/office/:id', async (request, response)=> {
    try{
        const idOffice = request.params.id;
        const dataToUpdate = request.body;
        const office = await useCasesOffice.updateData(idOffice, dataToUpdate);

        if(!office) throw new Error('Office Not Found');
        response.json({
            success: true,
            message: 'Office Updated Successfully',
            data:{
                office: office
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

router.delete('/office/:id', async (request, response)=> {
    try{
        const idOffice = request.params.id;
        const deleteOffice = await useCasesOffice.deleteById(idOffice)

        response.json({
            success: true,
            message: 'Delete Office',
            data:{
                office: deleteOffice
            }
        })

    } catch (error) {
        
        response.status(400)
        response.json({
            success: false,
            message: 'Error Deleting id Office',
            error: error.message
        })
    }  
})


// Login 
router.post('/login', async (request, response)=>{
    try {
        const {email, password} = req.body;
        const token = await useCasesOffice.login(email, password);

        response.json({
            success: true, 
            message: 'Login succesfully',
            data:{
                token
            }
        })
    } catch (error) {
        res.status(400)
        res.json({
            success: false,
            message: 'Could not register',
            error: error.message
        })
    }
})
module.exports = router;