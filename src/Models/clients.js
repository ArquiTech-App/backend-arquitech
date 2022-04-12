const mongoose = require('mongoose');
const mg = mongoose;

const clientSchema = new mg.Schema({

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
      organization: {
        type: String,
        required: true,
        minlength: 5,
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
    rfc: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        trim: true 
      },
      office: {
         type: mg.Types.ObjectId, ref: 'office'
      },
      projects: [{
        type: mg.Types.ObjectId, ref: 'projects'
     }]
})

const model = mg.model('clients', clientSchema)

module.exports = model