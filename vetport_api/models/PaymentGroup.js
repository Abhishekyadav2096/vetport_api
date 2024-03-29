const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentgroup = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
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

const PaymentGroupModel = mongoose.model("paymentgroup", paymentgroup);
module.exports = PaymentGroupModel;
