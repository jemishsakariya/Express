// const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

const config = require("./config");
require("dotenv").config();

/*
async function dbConnect() {
  const client = new MongoClient(process.env.MONGODB_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  await client.db("gridFs").command({ ping: 1 });
  console.log("You successfully connected to MongoDB!");
}
*/

function dbConnect() {
  mongoose
    .connect(config.MONGODB_URL)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.error("DB Connection Issue", err.message);
      process.exit(1);
    });
}

module.exports = dbConnect;
