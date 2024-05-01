const router = require("express").Router();

const { readData } = require("../middleware/userMiddleware");
const { isValid } = require("../validator/userValidator");
const {
  createUser,
  getAllUser,
  updateUserEmail,
  deleteUser,
  searchUser,
} = require("../controller/userController");

router.post("/user", isValid, readData, createUser);
router.get("/user", readData, getAllUser);
router.get("/user/:search", readData, searchUser);
router.patch("/user", readData, updateUserEmail);
router.delete("/user", readData, deleteUser);

router.all("*", function (req, res) {
  res.status(404).json({ message: "Route Not Found!!" });
});

module.exports = router;
