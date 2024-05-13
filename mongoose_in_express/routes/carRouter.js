const router = require("express").Router();

const carController = require("../controller/carController");

router.post("/", carController);

module.exports = router;
