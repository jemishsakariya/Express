const router = require("express").Router();

const transactionController = require("../controller/transactionController");

router.post("/", transactionController);

module.exports = router;
