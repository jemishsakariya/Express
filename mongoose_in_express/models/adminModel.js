const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    sName: {
      type: String,
      required: true,
    },
    sPassword: {
      type: String,
      required: true,
      trim: true,
      validate: function (pass) {
        return pass.length >= 3;
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
