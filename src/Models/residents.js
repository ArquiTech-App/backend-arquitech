const mongoose = require('mongoose');

const mg = mongoose

const residentSchema = new mg.Schema({
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
        type: mg.Types.ObjectId, ref: 'office'
    },
    projects: [{
      type: mg.Types.ObjectId, ref: 'projects'
    }],
    tasks: [
      tasksSchema
    ]
})

const model = mg.model('residents', residentSchema)

module.exports = model