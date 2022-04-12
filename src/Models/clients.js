const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({

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
      phone:{
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 10,
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
      offices: {
         type: mg.Types.ObjectId, ref: 'office'
      },
      projects: [{
        type: mg.Types.ObjectId, ref: 'projects'
     }]
})

const model = mongoose.model('clients', clientSchema)

module.exports = model