const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    iUsersID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    iSellersID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
    iCarsID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
