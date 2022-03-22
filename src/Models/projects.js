const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
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
      status: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        trim: true 
      },
      contract: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
        trim: true 
      },
      clients: {
         
      },
      office: {
         
      },
      documents: {
         
      },
      tasks: {
       
      }
})

const model = mongoose.model('projects', projectSchema)

module.exports = model