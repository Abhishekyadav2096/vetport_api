const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonetype = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    format: {
      type: String,
      required: true,
      trim: true,
    },
    sms: {
      type: Boolean,
      default: false,
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

const PhonetypeModel = mongoose.model("phonetype", phonetype);
module.exports = PhonetypeModel;
