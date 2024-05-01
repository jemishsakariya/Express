const express = require("express");
const app = express();

const config = require("./utils/config");
const PORT = config.PORT;

app.use(express.json());

const router = require("./routes/index");
app.use("/api", router);

app.get("/", function (req, res) {
  res.status(200).send("Hello Everyone!!");
});

app.listen(PORT, () => {
  console.log(`server is lisning on http://127.0.0.1:${PORT}`);
});
