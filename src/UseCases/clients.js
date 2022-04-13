const Clients = require('../Models/clients');
const bcrypt = require('../Lib/bcrypt');
const jwt = require('../Lib/jwt');
const sgMail = require('../Lib/sendgrid')

function getClients(){
   return Clients.find({})
}

function getById(idClient){
   return Clients.findById(idClient)
}

function create(dataClients){
    const {name, address, phone, organization, email, password, rfc, client, offices, projects} = dataClients

    const passwordFound = await Clients.findOne({password: password})
    if(passwordFound) throw new Error("Not permision to create, this password already exist");
}

function updateData(idClient, dataToUpdate){
   return Clients.findByIdAndUpdate(idClient, dataToUpdate, {new:true})

   const passwordEncrypt = await bcrypt.hash(password)
    return Clients.create({...dataClients,
                            password: passwordEncrypt})
}

function deleteById(idClient){
   return Clients.findByIdAndDelete(idClient)
}

module.exports = {
   getClients,
   getById,
   create,
   updateData,
   deleteById 
}