const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    nBalance: {
      type: Number,
      required: true,
    },
    iUserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: { createdAt: "dCreatedAt", updatedAt: "dUpdatedAt" } }
);

module.exports = mongoose.model("Wallet", walletSchema);
