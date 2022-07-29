const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Client = require("./Clientregistration");
const Species = require("./Species");

const patientregistration = new Schema(
  {
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: Client.modelName,
    },
    speciesId: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const PatientModel = mongoose.model("patientregistration", patientregistration);
module.exports = PatientModel;
