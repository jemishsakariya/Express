const mongoose = require("mongoose");
const User = require("../model/userModel");
const Wallet = require("../model/walletModel");

const router = require("express").Router();

// Manual transaction
router.post("/v1/register", async (req, res) => {
  const session = await mongoose.startSession();
  try {
    const transactionOptions = {
      readPreference: "primary", // it must be primary for read operation
      writeConcern: { level: "majority" },
      readConcern: { w: "majority" },
    };
    session.startTransaction(transactionOptions);

    const user = await User.create([req.body], { session: session });
    const wallet = await Wallet.create(
      [{ nBalance: 0, iUserID: user[0]._id }],
      { session: session }
    );

    // const findUser = await Wallet.findOne({})
    //   .populate("iUserID", "-sPassword")
    //   .session(session);
    // console.log(findUser);

    // throw new Error("Transaction Failed");

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ sMessage: "user registerd successfully" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
});

// automatic transaction
/*
router.post("/v1/register", async (req, res) => {
  const session = await mongoose.startSession();

  const transactionOptions = {
      readPreference: "primary", // it must be primary for read operation
      writeConcern: { level: "majority" },
      readConcern: { w: "majority" },
  };

  try {
    await session.withTransaction(async () => {
      // auto commit or rollback transaction
      const user = await User.create([req.body], { session: session });
      const wallet = await Wallet.create(
        [{ nBalance: 0, iUserID: user[0]._id }],
        { session: session }
      );
    },transactionOptions);

    return res.status(200).json({ sMessage: "user registerd successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
});
*/

router.post("/v1/credittransaction", async (req, res) => {
  const session = await mongoose.startSession();
  try {
    const transactionOptions = {
      readPreference: "primary",
      writeConcern: { level: "majority" },
      readConcern: { w: "majority" },
    };
    session.startTransaction(transactionOptions);

    const user1 = await Wallet.updateOne(
      { iUserID: req.body.user1 },
      { $inc: { nBalance: -100 } },
      { session: session }
    );

    const user2 = await Wallet.updateOne(
      { iUserID: req.body.user2 },
      { $inc: { nBalance: 100 } },
      { session: session }
    );

    await session.commitTransaction();
    session.endSession();

    return res
      .status(200)
      .json({ user1, user2, sMessage: "user registerd successfully" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
});

// create two session and try to update data in collection.
router.post("/v1/transactionwithtwosession", async (req, res) => {
  const session1 = await mongoose.startSession();
  const session2 = await mongoose.startSession();
  try {
    const transactionOptions = {
      readPreference: "primary",
      writeConcern: { level: "majority" },
      readConcern: { w: "majority" },
    };
    session1.startTransaction(transactionOptions);
    session2.startTransaction(transactionOptions);

    // inc user balance by two session
    await Wallet.updateOne(
      { _id: req.body.iUserID },
      { $inc: { nBalance: 10 } },
      { session: session1 }
    );

    await Wallet.updateOne(
      { _id: req.body.iUserID },
      { $inc: { nBalance: 20 } },
      { session: session2 }
    );

    await session1.commitTransaction();
    session1.endSession();

    await session2.commitTransaction();
    session2.endSession();

    return res.status(200).json({ sMessage: "transaction success" });
  } catch (error) {
    await session1.abortTransaction();
    session1.endSession();

    await session2.abortTransaction();
    session2.endSession();

    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
});

router.all("*", function (_req, res) {
  res.status(404).json({ sMessage: "Route Not Found!!" });
});

module.exports = router;
