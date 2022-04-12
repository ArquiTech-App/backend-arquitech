const Offices = require('../Models/offices');
const bcrypt = require('../Lib/bcrypt');
const jwt = require('../Lib/jwt');

function getOffices(){
    return Offices.find({})
}

function getById(idOffice){
    return Offices.findById(idOffice)
}

function create(dataOffices){
    const {name, address, email, password, rfc, clients, residents, projects} = dataOffices

    const emailFound = await getOffices.findOne({email: email})
    if(emailFound) throw new Error("Not permision to create, this e-mail already exist");

    const passwordEncrypt = await bcrypt.hash(password)
    return Offices.create({...dataOffices,
                            password: passwordEncrypt}) 
}

function updateData(idOffice, dataToUpdate){
    return Offices.findByIdAndUpdate(idOffice, dataToUpdate, {new:true})
}

function deleteById(idOffice){
    return Offices.findByIdAndDelete(idOffice)
}

//Login Office
async function login(email, password){
    const officeFound = await Offices.findOne({email: email});

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