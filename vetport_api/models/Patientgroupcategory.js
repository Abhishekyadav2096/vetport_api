const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientgroupcategory = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const PatientgroupcategoryModel = mongoose.model(
  "patientgroupcategory",
  patientgroupcategory
);
module.exports = PatientgroupcategoryModel;
