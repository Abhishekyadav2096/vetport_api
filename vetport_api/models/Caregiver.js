const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caregiver = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  number: {
    type: Array,
    default: [],
  },
  Relationship: {
    type: String,
    default: null,
  },
  notes: {
    type: String,
    trim: true,
  },
});

const CaregiverModel = mongoose.model("caregiver", caregiver);
module.exports = CaregiverModel;
