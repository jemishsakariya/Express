const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();

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

module.exports = dbConnect;
