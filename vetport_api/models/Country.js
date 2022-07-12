const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const country = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const CountryModel = mongoose.model("country", country);
module.exports = CountryModel;
