const mongoose = require("mongoose");
const User = require("../model/userModel");
const Wallet = require("../model/walletModel");

const router = require("express").Router();

// Manual transaction
// router.post("/v1/register", async (req, res) => {
//   const session = await mongoose.startSession();
//   try {
//     const transactionOptions = {
//       readPreference: "primary", // it must be primary
//       writeConcern: { level: "majority" },
//       readConcern: { w: "majority" },
//     };
//     session.startTransaction(transactionOptions);

//     const user = await User.create([req.body], { session: session });
//     const wallet = await Wallet.create(
//       [{ nBalance: 0, iUserID: user[0]._id }],
//       { session: session }
//     );

//     // throw new Error("Transaction Failed");

//     await session.commitTransaction();
//     session.endSession();

//     return res.status(200).json({ sMessage: "user registerd successfully" });
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();

//     return res
//       .status(500)
//       .json({ sMessage: "Internal Server Error", sError: error.message });
//   }
// });

// automatic transaction
router.post("/v1/register", async (req, res) => {
  const session = await mongoose.startSession();

  try {
    await session.withTransaction(async () => {
      // auto commit or rollback transaction
      const user = await User.create([req.body], { session: session });
      const wallet = await Wallet.create(
        [{ nBalance: 0, iUserID: user[0]._id }],
        { session: session }
      );
    });

    return res.status(200).json({ sMessage: "user registerd successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
});

router.all("*", function (_req, res) {
  res.status(404).json({ sMessage: "Route Not Found!!" });
});

module.exports = router;
