const router = require("express").Router();

const { getUsers } = require("../controller/adminController");
const { readData } = require("../middleware/userMiddleware");

router.get("/admin", readData, getUsers);

module.exports = router;
