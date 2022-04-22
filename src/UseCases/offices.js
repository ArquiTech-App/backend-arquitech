const Office = require('../Models/offices');
const bcrypt = require('../Lib/bcrypt');
const jwt = require('../Lib/jwt');

function getOffices(){
    return Office.find({})
}

function getById(idOffice){
    return Office.findById(idOffice)
}

<<<<<<< HEAD:src/UseCases/offices.js
async function create(dataOffices){
    const {name, address, email, password, rfc, clients, residents, projects} = dataOffices
=======
async function create(dataOffice){
    const {name, address, email, password, rfc, client, residents, projects, permission} = dataOffice
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/UseCases/office.js

    const emailFound = await getOffices.findOne({email: email})
    if(emailFound) throw new Error("Not permision to create, this e-mail already exist");

    const passwordEncrypt = await bcrypt.hash(password)
    return Office.create({...dataOffices,
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
<<<<<<< HEAD:src/UseCases/offices.js
    const officeFound = await Office.findOne({email: email})

=======
    const officeFound = await Office.findOne({email: email});
    
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/UseCases/office.js
    if (!officeFound) throw new Error('Invalid credentials')

    const isValidPassword = await bcrypt.compare(password, officeFound.password)

    if (!isValidPassword) throw new Error('Invalid credentials')
<<<<<<< HEAD:src/UseCases/offices.js

    return jwt.sign({id: officeFound.id})
=======
    
    return jwt.sign({id: officeFound.id,
    permission: officeFound.permission})
        
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/UseCases/office.js
    
}

module.exports = {
    getOffices,
    getById,
    create,
    updateData,
    deleteById,
    login
}