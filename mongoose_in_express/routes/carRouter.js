const router = require("express").Router();

const { addCar } = require("../controller/carController");
const { isValidCar } = require("../validator/carValidator");

router.post("/", isValidCar, addCar);

module.exports = router;
