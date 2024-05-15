const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    aProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    nQuantity: { type: Number, required: true },
    nPrice: { type: Number, required: true },
    sDiscount: { type: String, required: true },
    nTotal: { type: Number, required: true },
    iCustomerID: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  },
  { timestamps: { createdAt: "dCreatedAt", updatedAt: "dUpdatedAt" } }
);

module.exports = mongoose.model("Order", orderSchema);
