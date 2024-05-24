const router = require("express").Router();

const { isValidAdmin } = require("../validator/adminValidator");
const { addAdmin, totalSoldCars, carSoldMostInCity, mostSoldCar } = require("../controller/adminController");

router.post("/", isValidAdmin, addAdmin);
router.get("/totalsoldcars", totalSoldCars);
router.get("/carsoldmostincity", carSoldMostInCity);
router.get("/mostsoldcar", mostSoldCar);

module.exports = router;
