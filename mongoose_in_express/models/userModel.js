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
<<<<<<< HEAD
    eStatus: {
      enum: ["Y", "N", "B"],
    },
=======
>>>>>>> parent of c97a563 (cron job to update user status)
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
