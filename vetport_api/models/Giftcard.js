const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const giftcard = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    giftCardCode: {
      type: String,
      required: true,
      trim: true,
    },
    validFrom: {
      type: Date,
      required: true,
    },
    validTill: {
      type: Date,
      required: true,
    },
    giftCardValue: {
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
    strict: false,
  }
);

const GiftCardModel = mongoose.model("giftcard", giftcard);
module.exports = GiftCardModel;
