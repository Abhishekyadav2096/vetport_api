const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Staff = require("./Staff");

const userId = new Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    userGroup: {
      type: String,
      trim: true,
      required: true,
    },
    homePage: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    staff: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
    },
  },
  {
    timestamps: true,
  }
);

const UserIdModel = mongoose.model("userId", userId);
module.exports = UserIdModel;
