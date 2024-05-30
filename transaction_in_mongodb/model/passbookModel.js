const mongoose = require("mongoose");

const passbookSchema = new mongoose.Schema(
  {
    iUserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    nAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: { createdAt: "dCreatedAt", updatedAt: "dUpdatedAt" } }
);

module.exports = mongoose.model("Passbook", passbookSchema);
