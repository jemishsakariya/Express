const mongoose = require("mongoose");

require("dotenv").config();

function dbConnect() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.error("DB Connection Issue", err.message);
      process.exit(1);
    });
}

module.exports = dbConnect;
