const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pricingstrategy = new Schema(
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

const PricingstrategyModel = mongoose.model("pricingstrategy", pricingstrategy);
module.exports = PricingstrategyModel;
