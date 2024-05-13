const router = require("express").Router();

const { addSeller } = require("../controller/sellerController");
const { isValidSaller } = require("../validator/sellerValidator");

router.post("/", isValidSaller, addSeller);

module.exports = router;
