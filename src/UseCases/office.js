const Office = require('../Models/office');
const bcrypt = require('../Lib/bcrypt');
const jwt = require('../Lib/jwt');

function getOffices(){
    return Office.find({})
}

function getById(idOffice){
    return Office.findById(idOffice)
}

async function create(dataOffice){
    const {name, address, email, password, rfc, client, residents, projects} = dataOffice

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

//Login Office
async function login(email, password){
    const officeFound = await Office.findOne({email: email});
    
    if (!officeFound) throw new Error('Invalid credentials')

    const isValidPassword = await bcrypt.compare(password, officeFound.password)

    if (!isValidPassword) throw new Error('Invalid credentials')
    
    return jwt.sign({id: officeFound.id})
        
    
}

module.exports = {
    getOffices,
    getById,
    create,
    updateData,
    deleteById,
    login
}