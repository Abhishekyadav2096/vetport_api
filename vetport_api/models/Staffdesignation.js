const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffdesignation = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const StaffdesignationModel = mongoose.model(
  "staffdesignation",
  staffdesignation
);
module.exports = StaffdesignationModel;
