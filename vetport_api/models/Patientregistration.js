const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Client = require("./Clientregistration");
const Species = require("./Species");
const Staff = require("./Staff");
const Breed = require("./Breed");
const Sex = require("./Sex");
const Color = require("./Color");

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
      required: true,
    },
    breedId: {
      type: Schema.Types.ObjectId,
      ref: Breed.modelName,
    },
    sexId: {
      type: Schema.Types.ObjectId,
      ref: Sex.modelName,
    },
    colorId: {
      type: Schema.Types.ObjectId,
      ref: Color.modelName,
    },
    preferredProvider: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const PatientModel = mongoose.model("patientregistration", patientregistration);
module.exports = PatientModel;
