const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    sCategoryName: { type: String, trim: true, require: true },
    sCategoryDescription: { type: String, trim: true, require: true },
  },
  { timestamps: { createdAt: "dCreatedAt", updatedAt: "dUpdatedAt" } }
);

module.exports = mongoose.model("Category", categorySchema);
