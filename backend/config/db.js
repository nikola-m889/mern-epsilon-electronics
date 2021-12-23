require("dotenv").config();
const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to MongoDB was succesful.");
  } catch (error) {
    console.error("Connection to MongoDB was not successful.");
    process.exit(1);
  }
};

module.exports = connectMongoDB;
