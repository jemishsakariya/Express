const router = require("express").Router();

const { addTransaction } = require("../controller/transactionController");
const {
  transactionMiddleware,
} = require("../middleware/transactionMiddleware");
const { isValidTransaction } = require("../validator/transactionValidator");

router.post("/", isValidTransaction, transactionMiddleware, addTransaction);

module.exports = router;
