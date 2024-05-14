const router = require("express").Router();

const { isValidAdmin } = require("../validator/adminValidator");
const { addAdmin } = require("../controller/adminController");

router.post("/", isValidAdmin, addAdmin);

module.exports = router;
