const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinic = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    clinic_type: {
      type: [String],
    },
    location: {
      type: [Object],
    },
    address1: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: Object,
      required: true,
      default: null,
    },
    state: {
      type: Object,
      required: true,
      default: null,
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
      required: true,
      trim: true,
    },
    timezone: {
      type: Object,
      required: true,
      default: null,
    },
    startTime: {
      type: String,
      required: true,
      trim: true,
    },
    endTime: {
      type: String,
      required: true,
      trim: true,
    },
    phonetypes: {
      type: Array,
      required: true,
      default: [],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const ClinicModel = mongoose.model("clinic", clinic);
module.exports = ClinicModel;
