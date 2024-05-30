const express = require("express");

const router = require("./routes/transactionRouter");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/api", router);

app.get("/", function (req, res) {
  res.status(200).send("Hello Everyone!!");
});

app.listen(PORT, () => {
  console.log(`server is listening on http://127.0.0.1:${PORT}`);
});

const dbConnect = require("./utils/database");
dbConnect();
