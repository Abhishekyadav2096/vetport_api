const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockbasket = new Schema(
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

const StockbasketModel = mongoose.model("stockbasket", stockbasket);
module.exports = StockbasketModel;
