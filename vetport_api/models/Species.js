const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const species = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
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

const SpeciesModel = mongoose.model("species", species);
module.exports = SpeciesModel;
