const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discount = new Schema(
  {
    distitle: {
      type: String,
      trim: true,
    },
    distype: {
      type: String,
      trim: true,
    },
    validfrom: {
      type: String,
      trim: true,
    },
    never_Expire: {
      type: Boolean,
    },
    coupon_type: {
      type: Array,
    },
    disvalue: {
      type: String,
      trim: true,
    },
    enterDes: {
      type: String,
      trim: true,
    },
    default: {
      type: Boolean,
    },
    status: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const DiscountModel = mongoose.model("discount", discount);
module.exports = DiscountModel;
