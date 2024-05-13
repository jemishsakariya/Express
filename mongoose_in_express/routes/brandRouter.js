const router = require("express").Router();

const brandController = require("../controller/brandController");

router.post("/", brandController);

module.exports = router;
