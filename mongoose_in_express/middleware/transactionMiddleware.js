const User = require("../models/userModel");
const Seller = require("../models/sellerModel");

exports.transactionMiddleware = (req, res, next) => {
  try {
    const { iUsersID, iSellersID } = req.body;

    const user = User.findById(iUsersID);
    if (!user) {
      return res.status(404).json({ sMessage: "User Not Found" });
    }

    const seller = Seller.findById(iSellersID);
    if (!seller) {
      return res.status(404).json({ sMessage: "Seller Not Found" });
    }

    if (user.sCity !== seller.sCity) {
      return res
        .status(400)
        .json({ sMessage: "User And Seller Must Be In Same City" });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
