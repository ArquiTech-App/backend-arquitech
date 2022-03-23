const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
      },
      start: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 100,
        trim: true 
      },
      end: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 100,
        trim: true 
      },
      id: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 100,
        trim: true 
      },
      type: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
      },
      progress: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
      }     
})

module.exports = tasksSchema