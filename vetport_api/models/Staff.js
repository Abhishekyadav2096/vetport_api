const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const staff = new Schema(
  {
    clinicName: {
      type: Object,
      required: true,
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
    email: {
      type: String,
      required: true,
      trim: true,
    },
    address1: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: Object,
      required: true,
      default: null,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    postalCode: {
      type: String,
      trim: true,
      required: true,
    },
    personal_ptype: {
      type: Object,
      default: null,
      required: true,
    },
    personal_pnumber: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    isProvider: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);
const StaffModel = mongoose.model("staff", staff);
module.exports = StaffModel;
