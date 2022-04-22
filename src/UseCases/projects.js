const Projects = require('../Models/projects');
const bcrypt = require('../Lib/bcrypt');
const jwt = require('../Lib/jwt');

function getProjects(){
    return Projects.find({})
}

function getById(idProjects){
    return Projects.findById(idProjects)
}

<<<<<<< HEAD
function create(dataProjects){
    const {name, organization, status, contract, clients, offices, documents, tasks} = dataProjects
=======
async function create(dataProjects){
    const {name, organization, status, contract, client, office, documents, tasks} = dataProjects
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5

    const ProjectFound = await Projects.findOne({name: name})
    if(ProjectFound) throw new Error("Not permision to create, this Project already exist");
    
}

function updateData(idProject, dataToUpdate){
    return Projects.findByIdAndUpdate(idProject, dataToUpdate, {new:true})
}

function deleteById(idProject){
    return Projects.findByIdAndDelete(idProject)
}

module.exports = {
    getProjects,
    getById,
    create,
    updateData,
    deleteById
}