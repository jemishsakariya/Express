const Car = require("../models/carModel");
const Seller = require("../models/sellerModel");

exports.addSeller = async (req, res) => {
  try {
    const sName = req.body.sName;
    const sCity = req.body.sCity;
    const aCarsIDs = req.body.aCarsIDs;

    // for (const iCarID of aCarsIDs) {
    //   const oCar = await Car.findById(iCarID);
    //   if (!oCar) {
    //     return res
    //       .status(404)
    //       .json({ sMessage: `Car Not Found with id: ${iCarID}` });
    //   }
    // }

    const oCar = await Car.find({
      _id: { $in: aCarsIDs },
    });
    if (oCar.length != aCarsIDs.length) {
      return res.status(404).json({ sMessage: "Seller Car Not Found" });
    }
    // console.log(oCar);

    const seller = await Seller.create({ sName, sCity, aCars: aCarsIDs });

    return res
      .status(200)
      .json({ sMessage: "Seller Added Successfully", oSeller: seller });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
