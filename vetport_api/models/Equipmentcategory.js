const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentCategory = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
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

const EquipmentCategoryModel = mongoose.model(
  "EqptCategory",
  equipmentCategory
);
module.exports = EquipmentCategoryModel;
