const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    sName: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "dCreatedAt", updatedAt: "dUpdatedAt" } }
);

module.exports = mongoose.model("User", userSchema);
