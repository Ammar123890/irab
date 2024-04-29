//NPM Packages
const mongoose = require("mongoose");
require("dotenv").config;

module.exports = connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection Created");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
