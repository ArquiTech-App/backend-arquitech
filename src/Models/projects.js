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
      client: {
        type: mg.Types.ObjectId, ref: 'clients'
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