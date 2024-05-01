const router = require("express").Router();

const { readData } = require("../middleware/userMiddleware");
const { isValidForRegister } = require("../validator/userValidator");
const {
  createUser,
  getAllUser,
  updateUserEmail,
  deleteUser,
  searchUser,
  updateUserPassword,
} = require("../controller/userController");

router.use(readData); 

router.post("/user", isValidForRegister, createUser);
router.get("/user", getAllUser);
router.get("/user/:search", searchUser);
router.patch("/user/updateemail", updateUserEmail);
router.patch("/user/updatepassword", updateUserPassword);
router.delete("/user", deleteUser);

router.all("*", function (req, res) {
  res.status(404).json({ message: "Route Not Found!!" });
});

module.exports = router;
