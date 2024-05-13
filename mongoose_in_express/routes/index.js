const router = require("express").Router();



router.all("*", function (req, res) {
  res.status(404).json({ message: "Route Not Found!!" });
});

module.exports = router;
