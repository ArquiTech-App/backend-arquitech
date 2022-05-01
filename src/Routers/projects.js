const express = require('express');

const useCasesProjects = require('../UseCases/projects');

const router = express.Router();

router.get('/', async (request, response) => {
    try{
        
        const allProjects = await useCasesProjects.getProjects()

        response.json({
            success: true,
            message: 'allProjects',
            data: {
                projects: allProjects,
            }
        })

    } catch (error) {

        response.status(400)
        response.json({
            success: false,
            message: 'error at get all projects',
            error: error.message
        })
    }
})

router.get('/:id', async (request, response)=> {
    try{
        const idProjects = request.params.id;
        const ProjectsFound = await useCasesProjects.getById(idProjects);

        if(!ProjectsFound) throw new Error("Project not found");
        response.json({
            success: true,
            message: "Project Found",
            data: {
                projects: ProjectsFound
            }
        })

    } catch (error) {
        response.status(404)
        response.json({
            success: false,
            message: "Project not found",
            error: error.message
        })
    }   
})

router.post('/', async (request, response)=> {
    try{
        const projectToCreate = request.body
        const projectCreated = await useCasesProjects.create(projectToCreate);

        response.json({
            success: true,
            message: 'Project Created',
        })

    } catch (error) {

        response.status(400)
        response.json({
            success: false,
            message: 'Error at Create Project',
            error: error.message
        })
    }    
})

router.patch('/:id', async (request, response)=> {
    try{
        const idProject = request.params.id;
        const dataToUpdate = request.body;
        const project = await useCasesProjects.updateData(idProject, dataToUpdate);

        if(!project) throw new Error('Project Not Found');
        response.json({
            success: true,
            message: 'Project Updated Successfully',
            data:{
                projects: project
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

router.delete('/:id', async (request, response)=> {
    try{
        const idProject = request.params.id;
        const deleteProject = await useCasesProjects.deleteById(idProject)

        response.json({
            success: true,
            message: 'Delete Project',
            data:{
                projects: deleteProject
            }
        })

    } catch (error) {
        
        response.status(400)
        response.json({
            success: false,
            message: 'Error Deleting id Project',
            error: error.message
        })
    }  
})

module.exports = router;