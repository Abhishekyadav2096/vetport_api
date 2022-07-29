const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Plancategory = require("./Plancategory");
const Pricingstrategy = require("./Pricingstrategy");
const PlanSubCategory = require("./PlanSubCategory");

const planitem = new Schema(
  {
    pricingstrategy_id: {
      type: Schema.Types.ObjectId,
      ref: Pricingstrategy.modelName,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    planCategory_id: {
      type: Schema.Types.ObjectId,
      ref: Plancategory.modelName,
    },
    planSubCategory_id: {
      type: Schema.Types.ObjectId,
      ref: PlanSubCategory.modelName,
    },
    weight_range: {
      type: Object,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, strict: false }
);

const PlanitemModel = mongoose.model("planitem", planitem);
module.exports = PlanitemModel;
