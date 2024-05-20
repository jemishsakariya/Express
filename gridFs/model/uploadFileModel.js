const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  sFilename: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("File", fileSchema);
