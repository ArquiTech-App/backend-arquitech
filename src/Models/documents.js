const mg = require('mongoose');

const documentSchema = new mg.Schema({
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
        type:String,
        enum:['reports','videos','pdfs'] 
     }
})

module.exports = documentSchema