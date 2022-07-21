const mongoose = require("mongoose");
const Species = require("./Species");
const Schema = mongoose.Schema;

const sex = new Schema({
  species: {
    type: Schema.Types.ObjectId,
    ref: Species.modelName,
  },
  sex: {
    type: String,
    required: true,
    trim: true,
  },
  icon: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
  },
});

const SexModel = mongoose.model("sex", sex);
module.exports = SexModel;
