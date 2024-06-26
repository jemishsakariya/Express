const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    sName: {
      type: String,
      required: true,
    },
    iBrands: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);
