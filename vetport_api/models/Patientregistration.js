const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Client = require("./Clientregistration");

const patientregistration = new Schema({
  patientname: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
  },
  weight: {
    type: String,
    trim: true,
  },
  species: {
    type: String,
    trim: true,
  },
  identification_Marking: {
    type: String,
    trim: true,
  },
  preffer_Provider: {
    type: String,
    trim: true,
  },
  clinic: {
    type: String,
    trim: true,
  },
  taxable: {
    type: Boolean,
    trim: true,
  },
  microchip_Id: {
    type: String,
    trim: true,
  },

  apply_Discount: {
    type: Boolean,
  },
  patient_Group_Category: {
    type: String,
  },
  remark: {
    type: String,
  },
  alert: {
    type: String,
  },
  client_Id: {
    type: Schema.Types.ObjectId,
    ref: Client.modelName,
  },
});

const PatientModel = mongoose.model("patientregistration", patientregistration);
module.exports = PatientModel;
