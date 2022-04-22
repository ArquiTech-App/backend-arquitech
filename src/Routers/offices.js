const express = require('express');
const useCasesOffice = require('../UseCases/office');
const auth = require('../Middlewares/auth');
const {admin, writer, read} = require('../Middlewares/permission');
const validation = require('../Middlewares/validation')
const router = express.Router();

<<<<<<< HEAD:src/Routers/offices.js
const useCasesOffices = require('../UseCases/offices')
=======
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/Routers/office.js


<<<<<<< HEAD:src/Routers/offices.js
router.get('/', async (request, response) => {
=======
router.get('/offices',auth, async (request, response) => {
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/Routers/office.js
    try{
        
        const allOffices = await useCasesOffices.getOffices()

        response.json({
            success: true,
            message: 'allOffices',
            data: {
                offices: allOffices,
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

<<<<<<< HEAD:src/Routers/offices.js
router.get('/:id', async (request, response)=> {
=======
router.get('/offices/:id', auth, validation, async (request, response)=> {
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/Routers/office.js
    try{
        const idOffice = request.params.id;
        const officeFound = await useCasesOffices.getById(idOffice);

        if(!officeFound) throw new Error("Office not found");
        response.json({
            success: true,
            message: "Office found",
            data: {
                offices: officeFound
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
<<<<<<< HEAD:src/Routers/offices.js
router.post('/', async (request, response)=> {
    try{
        const officeToCreate = request.body
        const officeCreated = await useCasesOffices.create(officeToCreate);
=======
router.post('/offices', async (request, response)=> {
    try{
        const officeToCreate = request.body 
        const officeCreated = await useCasesOffice.create(officeToCreate);
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/Routers/office.js

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

<<<<<<< HEAD:src/Routers/offices.js
router.patch('/:id', async (request, response)=> {
=======
router.patch('/offices/:id',auth, validation, async (request, response)=> {
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/Routers/office.js
    try{
        const idOffice = request.params.id;
        const dataToUpdate = request.body;
        const office = await useCasesOffices.updateData(idOffice, dataToUpdate);

        if(!office) throw new Error('Office Not Found');
        response.json({
            success: true,
            message: 'Office Updated Successfully',
            data:{
                offices: office
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

<<<<<<< HEAD:src/Routers/offices.js
router.delete('/:id', async (request, response)=> {
=======
router.delete('/offices/:id',auth, validation, admin,  async (request, response)=> {
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/Routers/office.js
    try{
        const idOffice = request.params.id;
        const deleteOffice = await useCasesOffices.deleteById(idOffice)

        response.json({
            success: true,
            message: 'Delete Office',
            data:{
                offices: deleteOffice
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
router.post('/offices/login', async (request, response)=>{
    try {
<<<<<<< HEAD:src/Routers/offices.js
        const {email, password} = req.body;
        const token = await useCasesOffices.login(email, password);
=======
        const {email, password} = request.body;
        const token = await useCasesOffice.login(email, password);
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/Routers/office.js

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
module.exports = router;