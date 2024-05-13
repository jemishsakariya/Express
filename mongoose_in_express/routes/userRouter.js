const router = require("express").Router();

const { addUser } = require("../controller/userController");
const { isValidUser } = require("../validator/userValidator");

router.post("/", isValidUser, addUser);

module.exports = router;
