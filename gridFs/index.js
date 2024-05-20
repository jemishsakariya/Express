const express = require("express");
const app = express();

const config = require("./utils/config");
const router = require("./routes/uploadFileRoute");

app.use("/api", router);

app.listen(config.PORT, () => {
  console.log(`Server is listening on http://127.0.0.1:${config.PORT}`);
});

const dbConnect = require("./utils/database");
dbConnect();
