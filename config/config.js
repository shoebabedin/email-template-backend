const mongoose = require("mongoose");

const mongodb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = mongodb;