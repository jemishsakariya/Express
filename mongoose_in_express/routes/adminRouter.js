const router = require("express").Router();

const { isValidAdmin } = require("../validator/adminValidator");
const { addAdmin, totalSoldCars } = require("../controller/adminController");

router.post("/", isValidAdmin, addAdmin);
router.get("/totalsoldcars", totalSoldCars);

module.exports = router;
