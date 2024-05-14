const Transaction = require("../models/transactionModel");
const Car = require("../models/carModel");
const Seller = require("../models/sellerModel");

exports.addTransaction = async (req, res) => {
  try {
    const { iUsersID, iSellersID, iCarsID } = req.body;

    const isCarAvailable = await Car.findById(iCarsID);
    if (!isCarAvailable) {
      return res.status(404).json({ sMessage: "Car Not Available" });
    }
    // console.log(isCarAvailable);

    const isCarAvailInSeller = await Seller.findOne({
      _id: iSellersID,
      aCars: { $elemMatch: { $eq: iCarsID } },
    });
    if (!isCarAvailInSeller) {
      return res.status(404).json({ sMessage: "Car Not Available In Seller" });
    }
    // console.log(isCarAvailInSeller);

    const transaction = await Transaction.create({
      iUsersID,
      iSellersID,
      iCarsID,
    });

    return res.status(200).json({
      sMessage: "Seller Added Successfully",
      oTransaction: transaction,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
