const router = require("express").Router();

const { readData } = require("../middleware/userMiddleware");
const { isValidForRegister } = require("../validator/userValidator");
const { checkUserAuth } = require("../middleware/authMiddleware");
const {
  createUser,
  getAllUser,
  updateUserEmail,
  deleteUser,
  searchUser,
  updateUserPassword,
  login,
} = require("../controller/userController");

router.use(readData);

router.post("/user", isValidForRegister, createUser);
router.get("/user", getAllUser);
router.get("/user/:search", searchUser);
router.patch("/user/updateemail", checkUserAuth, updateUserEmail);
router.patch("/user/updatepassword", checkUserAuth, updateUserPassword);
router.delete("/user", deleteUser);

router.post("/user/login", login);

module.exports = router;
