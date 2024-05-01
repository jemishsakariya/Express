const router = require("express").Router();

const userRoute = require("./userRouter");
const adminRoute = require("./adminRouter");

router.use("/v1", userRoute);
router.use("/v1", adminRoute);

router.all("*", function (req, res) {
  res.status(404).json({ message: "Route Not Found!!" });
});

module.exports = router;
