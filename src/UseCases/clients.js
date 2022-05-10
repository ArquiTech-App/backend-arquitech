const Clients = require('../Models/clients');
const bcrypt = require('../Lib/bcrypt');
const jwt = require('../Lib/jwt');
const mailazy = require('../Lib/mailazy');
const Office = require('../Models/offices')



function getClients(){
   return Clients.find({})
}

function getById(idClient){
   return Clients.findById(idClient).populate('office projects')
}

 async function create(dataClients){
   const {name, lastName, email} = dataClients
   
   const userFound = await Clients.findOne({email:email})
   
   if (userFound) throw new Error('Not permision to create, this client already exist') 
   const clientCreated = await Clients.create({...dataClients})
   
   const token = jwt.sign({id: clientCreated._id})
   const idOffice = clientCreated.office
   const updateOffice = await Office.findByIdAndUpdate(idOffice, {$push: {clients: clientCreated._id}})
    let resClient = await mailazy(email, lastName, name, token);
   // await sendG.mailResetPassword({name, lastName, email})

   return resClient;
   
}

async function updateData(idClient, dataClients){
   return Clients.findByIdAndUpdate(idClient, dataClients)
}
async function updatePasword(idClient, dataToUpdate){

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


async function getForIdOffice(idOffice){
   return Clients.find({office: {_id: idOffice}}).populate({path: 'office', select:'name'})
}

module.exports = {
   getClients,
   getById,
   create,
   updatePasword,
   deleteById,
   login,
   getForIdOffice,
   updateData
}