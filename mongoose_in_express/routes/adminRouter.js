const router = require("express").Router();

const { isValidAdmin } = require("../validator/adminValidator");
const { addAdmin, totalSoldCars, carSoldMostInCity, mostSoldCar, brandsCarSoldMost } = require("../controller/adminController");

router.post("/", isValidAdmin, addAdmin);
router.get("/totalsoldcars", totalSoldCars);
router.get("/carsoldmostincity", carSoldMostInCity);
router.get("/mostsoldcar", mostSoldCar);
router.get("/brandscarsoldmost", brandsCarSoldMost);

module.exports = router;
