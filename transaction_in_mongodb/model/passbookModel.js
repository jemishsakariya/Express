const mongoose = require("mongoose");

const passbookSchema = new mongoose.Schema(
  {
    iUserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    iWalletID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet",
    },
  },
  { timestamps: { createdAt: "dCreatedAt", updatedAt: "dUpdatedAt" } }
);

module.exports = mongoose.model("Passbook", passbookSchema);
