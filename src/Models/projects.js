const mg = require('mongoose');
const documentSchema = require('./documents')
const tasksSchema = require('./tasks')



const projectSchema = new mg.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true 
      },
      organization: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 100,
        trim: true 
      },
      status: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 100,
        trim: true 
      },
      contract: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 100,
        trim: true 
      },
      client: {
<<<<<<< HEAD
        type: mg.Schema.Types.ObjectId, ref: 'clients'
=======
        type: mg.Types.ObjectId, ref: 'clients'
>>>>>>> d0c093d6951d6925e7c2f47b6a0d190affd13006
      },
      office: {
        type: mg.Types.ObjectId, ref: 'office' 
      },
      documents: [
        documentSchema
      ],
      tasks: [
          tasksSchema
      ]
})

const model = mg.model('projects', projectSchema)

module.exports = model