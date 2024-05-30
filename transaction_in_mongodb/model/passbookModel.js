const mongoose = require("mongoose");

const passbookSchema = new mongoose.Schema({
    
}, { timestamps: true });

module.exports = mongoose.model("Passbook", passbookSchema);
