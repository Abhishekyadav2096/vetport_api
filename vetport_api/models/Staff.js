const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staff = new Schema(
  {
    clinic: {
      type: String,
      required: true,
      trim: true,
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
    },
    emailgd: {
      type: String,
    },
    emailad: {
      type: String,
    },
    dob: {
      type: Date,
    },
    profilephoto: {
      type: String,
    },
    add1: {
      type: String,
    },
    add2: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    pscode: {
      type: String,
    },
    personalphone: {
      type: String,
    },
    alternatePhone: {
      type: String,
    },
    userId: {
      type: String,
    },
    usergroup: {
      type: String,
    },
    staffdesignation: {
      type: String,
    },
    socialsecurity: {
      type: String,
    },
    driverlicense: {
      type: String,
    },
    license_no: {
      type: String,
    },
    healthInsu_provider: {
      type: String,
    },
    healthInsu_no: {
      type: String,
    },
    directDeposit_bank: {
      type: String,
    },
    directDeposit_accno: {
      type: String,
    },
    directDeposit_routingNo: {
      type: String,
    },
    isuser_Provider: {
      type: String,
    },
    yes: {
      type: Boolean,
    },
    no: {
      type: Boolean,
    },
    recweekreport: {
      type: Boolean,
    },
    signature: {
      type: String,
    },
    specialization: {
      type: String,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const StaffModel = mongoose.model("staff", staff);
module.exports = StaffModel;
