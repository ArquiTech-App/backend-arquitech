const mg = require('mongoose');



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
    permission: {
      type: String,
      required: true,
      trim: true,
      enum: ['admin', 'readOnly', 'readAndWrite']
    },
    office: {
        type: mongoose.Types.ObjectId, ref: 'office'
    },
    projects: [{
      type: mongoose.Types.ObjectId, ref: 'projects'
    }],
    tasks: [
      tasksSchema
    ]
})

const model = mg.model('residents', residentSchema)

module.exports = model