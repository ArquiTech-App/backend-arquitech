const mg = require("mongoose");

const officeSchema = new mg.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
  },
  address: {
    type: String,
    required: true,
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
  permission: {
    type: String,
    required: true,
    trim: true,
    enum: ['admin', 'readOnly', 'readAndWrite'],
    default: 'admin'
  },
  rfc: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 15,
    trim: true,
  },
  clients: [
    {
      type: mg.Types.ObjectId,
      ref: "clients",
    },
  ],
  residents: [
    {
      type: mg.Types.ObjectId,
      ref: "residents",
    },
<<<<<<< HEAD:src/Models/offices.js
    rfc: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        trim: true 
      },
      clients: [{
        type: mongoose.Types.ObjectId, ref: 'clients'
      }],
      residents: [{
        type: mongoose.Types.ObjectId, ref: 'residents'
      }],
      projects: [{
        type: mongoose.Types.ObjectId, ref: 'projects'
     }]
})
=======
  ],
  projects: [
    {
      type: mg.Types.ObjectId,
      ref: "projects",
    },
  ],
});
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5:src/Models/office.js

const model = mg.model("office", officeSchema);

module.exports = model;
