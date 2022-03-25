const Office = require('../Models/office');

function getOffices(){
    return Office.find({})
}

function getById(idOffice){
    return Office.findById(idOffice)
}

function create(dataOffice){
    const {name, address, email, password, rfc, clients, residents, projects} = dataOffice
    return Office.create({name, address, email, password, rfc, clients, residents, projects}) 
}

function updateData(idOffice, dataToUpdate){
    return Office.findByIdAndUpdate(idOffice, dataToUpdate)
}

function deleteById(idOffice){
    return Office.findByIdAndDelete(idOffice)
}

module.exports = {
    getOffices,
    getById,
    create,
    updateData,
    deleteById
}