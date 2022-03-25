const Office = require('../Models/office');
const bcrypt = require('../Lib/bcrypt');

function getOffices(){
    return Office.find({})
}

function getById(idOffice){
    return Office.findById(idOffice)
}

function create(dataOffice){
    const {name, address, email, password, rfc, clients, residents, projects} = dataOffice

    const officeFound = await Office.findOne({office: office})
    if(officeFound) throw new Error("Not permision to create, this office already exist");

    const passwordEncrypt = await bcrypt.hash(password)
    return Office.create({name, address, email, password: passwordEncrypt, rfc, clients, residents, projects}) 
}

function updateData(idOffice, dataToUpdate){
    return Office.findByIdAndUpdate(idOffice, dataToUpdate, {new:true})
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