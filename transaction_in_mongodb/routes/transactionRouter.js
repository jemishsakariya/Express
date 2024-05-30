const router = require("express").Router();

router.post("register", function (req, res) {});

router.all("*", function (_req, res) {
  res.status(404).json({ sMessage: "Route Not Found!!" });
});

module.exports = router;
