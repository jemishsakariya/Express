const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    sName: { type: String, trim: true, required: true },
    sAddress: { type: String, trim: true, required: true },
    sEmail: { type: String, trim: true, required: true, unique: true },
    nPhoneNumber: { type: Number, min: 10, max: 10, required: true },
  },
  { timestamps: { createdAt: "dCreatedAt", updatedAt: "dUpdatedAt" } }
);

module.exports = mongoose.model("Supplier", supplierSchema);
