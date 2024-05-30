const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    
}, { timestamps: true });

module.exports = mongoose.model("Wallet", walletSchema);
