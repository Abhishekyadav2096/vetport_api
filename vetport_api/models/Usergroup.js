const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usergroup = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  Status: {
    type: Boolean,
  },
});

const UsergroupModel = mongoose.model("usergroup", usergroup);
module.exports = UsergroupModel;
