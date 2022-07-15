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
      required: true,
      trim: true,
    },
    emailgd: {
      type: String,
      trim: true,
    },
    emailad: {
      type: String,
      trim: true,
    },
    date_dob: {
      type: Date,
    },
    profilePhoto: {
      type: String,
      trim: true,
    },
    address1: {
      type: String,
      trim: true,
      required: true,
    },
    address2: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
      required: true,
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
    personalPhone: {
      type: Array,
      default: [],
    },
    alternatePhone: {
      type: Array,
      default: [],
    },
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    userGroup: {
      type: String,
      required: true,
      trim: true,
    },
    staffDesignation: {
      type: String,
      trim: true,
    },
    socialSecurity: {
      type: String,
      trim: true,
    },
    driverLicense: {
      type: String,
      trim: true,
    },
    license_no: {
      type: String,
      trim: true,
    },
    healthInsu_provider: {
      type: String,
      trim: true,
    },
    healthInsu_no: {
      type: String,
      trim: true,
    },
    directDeposit_bank: {
      type: String,
      trim: true,
    },
    directDeposit_accno: {
      type: String,
      trim: true,
    },
    directDeposit_routingNo: {
      type: String,
      trim: true,
    },
    is_Provider: {
      type: Boolean,
      default: false,
    },
    recWeekReport: {
      type: Boolean,
      default: false,
    },
    signature: {
      type: String,
      trim: true,
    },
    specialization: {
      type: String,
      trim: true,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const StaffModel = mongoose.model("staff", staff);
module.exports = StaffModel;
