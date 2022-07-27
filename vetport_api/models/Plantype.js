const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantype = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const PlantypeModel = mongoose.model("plantype", plantype);
module.exports = PlantypeModel;
