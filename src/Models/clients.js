const mg = require("mongoose");

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
    required:false,
    maxlength: 100,
    trim: true,
  },
  organization: {
    type: String,
    required:false,
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
    required: false,
  },
  rfc: {
    type: String,
    required: false,
    minlength: 10,
    maxlength: 15,
    trim: true,
  },
  permission: {
    type: String,
    required: false,
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

const model = mg.model("clients", clientSchema);

module.exports = model;

