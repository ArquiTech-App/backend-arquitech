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
      clients: [{
        type: mg.Types.ObjectId, ref: 'clients'
      }],
      residents: [{
        type: mg.Types.ObjectId, ref: 'residents'
      }],
      projects: [{
        type: mg.Types.ObjectId, ref: 'projects'
     }],
});

const model = mg.model("office", officeSchema);

module.exports = model;
