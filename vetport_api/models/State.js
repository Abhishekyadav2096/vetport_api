const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const state = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const StateModel = mongoose.model("state", state);
module.exports = StateModel;
