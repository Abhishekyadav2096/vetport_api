const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clinic = require("./Clinic");
const Planitem = require("./Planitem");
const Species = require("./Species");

const planItemInfo = new Schema(
  {
    planItemId: {
      type: Schema.Types.ObjectId,
      ref: Planitem.modelName,
      required: true,
    },
  },
  { strict: false }
);

const groupPlanItem = new Schema(
  {
    clinic: {
      type: Schema.Types.ObjectId,
      ref: Clinic.modelName,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    planItem: [planItemInfo],
    groupPlanItem: [
      {
        type: Schema.Types.ObjectId,
        ref: "groupPlanItem",
      },
    ],
    species: {
      type: Schema.Types.ObjectId,
      ref: Species.modelName,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, strict: false }
);

const groupPlanItemModel = mongoose.model("groupPlanItem", groupPlanItem);
module.exports = groupPlanItemModel;
