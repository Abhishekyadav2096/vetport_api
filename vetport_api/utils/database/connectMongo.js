const mongoose = require("mongoose");
const config = require("../../config");
const { db } = config;

const connectDB = async () => {
  try {
    //db.uri
    await mongoose.connect(db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log("database connection failed. exiting now...");
    throw new Error(error.message);
    //process.exit(1);
  }
};

module.exports = connectDB;
