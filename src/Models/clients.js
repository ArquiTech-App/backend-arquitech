const mg = require("mongoose");

<<<<<<< HEAD
const clientSchema = new mongoose.Schema({

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
      phone:{
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 10,
        trim: true 
      },
      organization: {
        type: String,
        required: true,
        minlength: 5,
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
        required: false
    },
    rfc: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        trim: true 
      },
      office: {
         type: mongoose.Types.ObjectId, ref: 'office'
      },
      projects: [{
        type: mongoose.Types.ObjectId, ref: 'projects'
     }]
})
=======
const clientSchema = new mg.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  adress: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
  },
  organization: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/,
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
    trim: true,
  },
  permission: {
    type: String,
    required: true,
    trim: true,
    enum:['readOnly', 'readAndWrite']
  },
  office: {
    type: mg.Types.ObjectId,
    ref: "office",
  },
  projects: [
    {
      type: mg.Types.ObjectId,
      ref: "projects",
    },
  ],
});
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5

const model = mg.model("clients", clientSchema);

module.exports = model;
