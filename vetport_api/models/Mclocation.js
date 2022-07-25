const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mclocation = new Schema({
  location_name: {
    type: String,
    required: true,
    trim: true,
  },
  location_address: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: Object,
    required: true,
  },
  state: {
    type: Object,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  postalCode: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
  },
});

const MclocationModel = mongoose.model("mclocation", mclocation);
module.exports = MclocationModel;
