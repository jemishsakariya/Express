const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    sProductName: { type: String, trim: true, require: true },
    sProductDescription: { type: String, trim: true, require: true },
    nPrice: { type: Number, required: true },
    nStock: { type: Number, default: 0 },
    iProductCategoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    isupplierID: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  },
  { timestamps: { createdAt: "dCreatedAt", updatedAt: "dUpdatedAt" } }
);

module.exports = mongoose.model("Product", productSchema);
