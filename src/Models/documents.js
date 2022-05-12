const mg = require('mongoose');

const documentSchema = new mg.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
      },
      url: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
     }
     
})

module.exports = documentSchema