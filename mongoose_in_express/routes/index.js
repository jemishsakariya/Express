const router = require("express").Router();

const brandRouter = require("./brandRouter");
const carRouter = require("./carRouter");
const sellerRouter = require("./sellerRouter");
const userRouter = require("./userRouter");
const transactionRouter = require("./transactionRouter");
const admin = require("./adminRouter");

router.use("/v1/brand", brandRouter);
router.use("/v1/car", carRouter);
router.use("/v1/seller", sellerRouter);
router.use("/v1/user", userRouter);
router.use("/v1/transaction", transactionRouter);
router.use("/v1/admin", admin);

router.all("*", function (_req, res) {
  res.status(404).json({ sMessage: "Route Not Found!!" });
});

module.exports = router;
