const router = require("express").Router();

const userRoute = require("./userRouter");
const adminRoute = require("./adminRouter");

router.use("/v1", userRoute);
router.use("/v1", adminRoute);



module.exports = router;
