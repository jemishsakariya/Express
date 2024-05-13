const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    oUsersID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    oSellersID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
    oCarsID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
