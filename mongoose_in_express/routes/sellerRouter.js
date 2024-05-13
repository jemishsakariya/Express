const router = require("express").Router();

const sellerController = require("../controller/sellerController");

router.post("/", sellerController);

module.exports = router;
