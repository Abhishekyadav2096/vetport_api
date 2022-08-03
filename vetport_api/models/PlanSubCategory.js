const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanType = require("./Plantype");
const PlanAction = require("./Planaction");
const PlanCategory = require("./Plancategory");

const planSubCategory = new Schema(
  {
    plantype_id: {
      type: Schema.Types.ObjectId,
      ref: PlanType.modelName,
    },
    plancategory_id: {
      type: Schema.Types.ObjectId,
      ref: PlanCategory.modelName,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    planaction_id: {
      type: Schema.Types.ObjectId,
      ref: PlanAction.modelName,
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

const PlanSubCategoryModel = mongoose.model("planSubCategory", planSubCategory);
module.exports = PlanSubCategoryModel;
