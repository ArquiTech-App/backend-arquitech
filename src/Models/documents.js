const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
      },
      description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200,
        trim: true 
      },
      url: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
     },
     categories: {
       
     }
})

const model = mongoose.model('documents', documentSchema)

module.exports = model