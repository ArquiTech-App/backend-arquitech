const Projects = require('../Models/projects');
const bcrypt = require('../Lib/bcrypt');
const jwt = require('../Lib/jwt');
const Clients = require('../Models/clients')

function getProjects(){
    return Projects.find({})
}

function getById(idProjects){
    return Projects.findById(idProjects)
}



async function create(dataProjects, idClient){
    const {name, organization, status, contract, client, office, documents, tasks} = dataProjects

    const ProjectFound = await Projects.findOne({name: name})
    if(ProjectFound) throw new Error("Not permision to create, this Project already exist");
    const projectCreated = await Projects.create({...dataProjects,
    "client": idClient
    })

    
    return updateClient = await Clients.findByIdAndUpdate(idClient,{$push:{projects: projectCreated._id}})


    
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