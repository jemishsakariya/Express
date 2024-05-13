const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    sName: {
      type: String,
      required: true,
    },
    sCity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
