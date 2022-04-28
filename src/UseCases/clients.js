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

 async function create(dataClients){
   const {name, email, lastName} = dataClients
   
   const userFound = await getClients.findOne({email:email})
   if (userFound) throw new Error('Not permision to create, this client already exist') 
   
   const clientCreated = await Clients.create({...dataClients})

   const token = jwt.sign({id: clientCreated._id})

   await sgMail.emailResetPassword({name, lastName, email, token})

   return token('email sent')
}

async function updateData(idClient, dataToUpdate){

   const {newPassword, confirmPassword} = dataToUpdate
   if(newPassword !== confirmPassword) throw new Error("Error Passwords do not match");

   const passwordEncrypt = await bcrypt.hash(newPassword)
   return Clients.findByIdAndUpdate(idClient, {password: passwordEncrypt}, {new:true})
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