const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
      },
      adress: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true 
      },
      email: {
        type: String,
        required: true,
        match: /.+@.+\..+/
    },
    password: {
        type: String,
        required: true,
    },
    office: {
         
    },
    projects: {
       
    },
    tasks: {
       
   }

})

const model = mongoose.model('residents', residentSchema)

module.exports = model