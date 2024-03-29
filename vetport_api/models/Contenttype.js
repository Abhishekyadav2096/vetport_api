const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contenttype = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const ContenttypeModel = mongoose.model("contenttype", contenttype);
module.exports = ContenttypeModel;
