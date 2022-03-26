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

    const emailFound = await Office.findOne({email: email})
    if(emailFound) throw new Error("Not permision to create, this e-mail already exist");

    const passwordEncrypt = await bcrypt.hash(password)
    return Office.create({...dataOffice,
                            password: passwordEncrypt}) 
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