const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Plantype = require("./Plantype");
const Planaction = require("./Planaction");
const plancategory = new Schema(
  {
    plantype_id: {
      type: Schema.Types.ObjectId,
      ref: Plantype.modelName,
    },
    plan_category: {
      type: String,
      required: true,
      trim: true,
    },
    Planaction_id: {
      type: Schema.Types.ObjectId,
      ref: Planaction.modelName,
    },
  },
  { timestamps: true, strict: false }
);

const PlancategoryModel = mongoose.model("plancategory", plancategory);
module.exports = PlancategoryModel;
