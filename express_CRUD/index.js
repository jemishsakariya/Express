const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

const config = require("./utils/config");
const PORT = config.PORT;

app.use(express.json());

const morgan = require("morgan");
// custom format - 1
// app.use(
//   morgan(":method :url :status :res[content-length] - :response-time ms")
// );

// custom format - 2
// app.use(
//   morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, "content-length"),
//       "-",
//       tokens["response-time"](req, res),
//       "ms",
//     ].join(" ");
//   })
// );

// it will skip all the log whoes status code is less than 400
// morgan("dev", {
//   skip: function (req, res) {
//     return res.statusCode < 400;
//   },
// });

// create a write stream (in append mode)
// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "access.log"),
//   {
//     flags: "a",
//   }
// );
// app.use(morgan("dev", { stream: accessLogStream }));

// we can also add custom token formats.
// morgan.token("host", function getId(req) {
//   return req.headers["host"];
// });
// app.use(morgan(":host"));

app.use(morgan("dev"));

const helmet = require("helmet");
app.use(helmet());

// const cors = require("cors");
// const corsOptions = {
  // origin: "http://127.0.0.1:5500", // all api is only available for localhost with port=5500 other can not access this app apis
  // origin: "*", // everyone can acsess api
  // optionsSuccessStatus: 200, status code success(200) then they able to access
// };
// app.use(cors(corsOptions));

const router = require("./routes/index");
app.use("/api", router);

app.get("/", function (req, res) {
  res.status(200).send("Hello Everyone!!");
});

app.listen(PORT, () => {
  console.log(`server is listening on http://127.0.0.1:${PORT}`);
});
