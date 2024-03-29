const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attachtype = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    statics: false,
  }
);

const AttachTypeModel = mongoose.model("attachtype", attachtype);
module.exports = AttachTypeModel;
