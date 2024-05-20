const router = require("express").Router();

const { uploadFile } = require("../controller/uploadFile");

router.post("/v1/upload", uploadFile);

router.all("*", function (_req, res) {
  res.status(404).json({ sMessage: "Route Not Found!!" });
});

module.exports = router;
