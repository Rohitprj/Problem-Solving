const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://New_Demo_User:VXrC2WGyxTwyU2sT@cluster0.shqzn.mongodb.net/notes",
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
