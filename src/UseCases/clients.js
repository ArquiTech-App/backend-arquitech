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
   const {name, lastName, email} = dataClients
   
   const userFound = await Clients.findOne({email:email})
   if (userFound) throw new Error('Not permision to create, this client already exist') 
   
   const clientCreated = await Clients.create({...dataClients})

   //const token = jwt.sign({id: clientCreated._id})

   //await sgMail.emailResetPassword({name, lastName, email, token})

   return "Client Created"
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

//Login Clients
async function login(email, password){
   const userFound = await Clients.findOne({email: email})
   if (!userFound) throw new Error('Invalid credentials')

   const isValidPassword = await bcrypt.compare(password, userFound.password)

   if (!isValidPassword) throw new Error('Invalid credentials')
   
   return jwt.sign({id: userFound.id,
   permission: userFound.permission})
}

module.exports = {
   getClients,
   getById,
   create,
   updateData,
   deleteById,
   login
}