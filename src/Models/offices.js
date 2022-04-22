const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
      },
      address: {
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
    rfc: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        trim: true 
      },
      clients: [{
        type: mongoose.Types.ObjectId, ref: 'clients'
      }],
      residents: [{
        type: mongoose.Types.ObjectId, ref: 'residents'
      }],
      projects: [{
        type: mongoose.Types.ObjectId, ref: 'projects'
     }]
})

const model = mongoose.model('office', officeSchema)

module.exports = model