const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clientregistration = new Schema(
  {
    clinicName: {
      type: Object,
      trim: true,
      default: null,
    },
    title: {
      type: Object,
      trim: true,
      default: null,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    address1: {
      type: String,
      required: true,
      trim: true,
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
    phonetypes: {
      type: Array,
      required: true,
      default: [],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);
const ClientModel = mongoose.model("clientregistration", clientregistration);
module.exports = ClientModel;
