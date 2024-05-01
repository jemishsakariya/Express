const fs = require("fs");

exports.readData = (req, res, next) => {
  const jsonData = fs.readFileSync("./userData.json");
  req["userData"] = JSON.parse(jsonData);
  return next();
};
