const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    sName: {
      type: String,
      required: true,
    },
    sCity: {
      type: String,
      required: true,
    },
    aCars: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);
