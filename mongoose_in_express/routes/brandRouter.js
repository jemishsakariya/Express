const router = require("express").Router();

const { addBrand } = require("../controller/brandController");
const { isValidBrand } = require("../validator/brandValidator");

router.post("/", isValidBrand, addBrand);

module.exports = router;
