const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Planitem = require("./Planitem");

const group_plan_item = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    planItemId: {
      type: Schema.Types.ObjectId,
      ref: Planitem.modelName,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, strict: false }
);

const groupPlanItemModel = mongoose.model("group_plan_item", group_plan_item);
module.exports = groupPlanItemModel;
