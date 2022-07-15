const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinic = new Schema({
  clinic_name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  clinic_type: {
    type: [String],
  },
  address1: {
    type: String,
    required: true,
    trim: true,
  },
  address2: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  postalCode: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  emails: {
    type: Array,
    default: [],
  },

  timezone: {
    type: String,
    required: true,
    trim: true,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  phonetypes: {
    type: Array,
    default: [],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const ClinicModel = mongoose.model("clinic", clinic);
module.exports = ClinicModel;
