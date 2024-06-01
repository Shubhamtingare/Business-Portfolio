const mongoose = require("mongoose");

const dbConn = async () => {
  try {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI);
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = dbConn;
