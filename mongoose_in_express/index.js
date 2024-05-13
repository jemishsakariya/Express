const express = require("express");
const app = express();

const config = require("./utils/config");
const router = require("./routes");

const PORT = config.PORT || 3000;

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is listening on http://127.0.0.1:${PORT}`);
});

const dbConnect = require("./utils/database");
dbConnect();
