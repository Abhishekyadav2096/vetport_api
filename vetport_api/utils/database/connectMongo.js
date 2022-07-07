const mongoose = require("mongoose");
const config = require("../../config");
const { db } = config;

const connectDB = async () => {
  try {
    //db.uri
     mongoose.connect(db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log("database connection failed. exiting now...");
    console.error(error);
    //process.exit(1);
  }
};

module.exports = connectDB;
