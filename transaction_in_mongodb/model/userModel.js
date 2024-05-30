const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    sName: {
      type: String,
      required: true,
    },
    nBalance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
