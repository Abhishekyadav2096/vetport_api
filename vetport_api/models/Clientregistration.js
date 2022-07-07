const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientregistration = new Schema({
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
  date_dob: {
    type: Date,
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
  declineEmail: {
    type: Boolean,
    default: false,
  },
  announcements: {
    type: Boolean,
    default: true,
  },
  reminders: {
    type: Boolean,
    default: true,
  },
  statements: {
    type: Boolean,
    default: true,
  },
  copyEmail: {
    type: String,
    trim: true,
  },
  emails: {
    type: Array,
    default: [],
  },
  phonetypes: {
    type: Array,
    default: [],
  },
  declineTextMessages: {
    type: Boolean,
    default: false,
  },
  preferredProvider: {
    type: String,
    default: null,
  },
  referredby: {
    type: String,
    default: null,
  },
  idCardNo: {
    type: String,
    trim: true,
  },
  alert: {
    type: String,
    trim: true,
  },
  isAccountBelongsToClinic: {
    type: Boolean,
    default: false,
  },
  isInterestApply: {
    type: Boolean,
    default: false,
  },
  isDiscountApply: {
    type: Boolean,
    default: false,
  },
  addDiscount: {
    type: String,
    trim: true,
  },
  isLoyaltyReward: {
    type: Boolean,
    default: false,
  },
  loyaltyReferrenceNo: {
    type: String,
    trim: true,
  },
  notes: {
    type: String,
    trim: true,
  },
  tags: {
    type: Array,
    default: [],
  },
  cdetails: {
    type: Array,
    default: [],
  },
});

const ClientModel = mongoose.model("clientregistration", clientregistration);
module.exports = ClientModel;
