const Car = require("../models/carModel");
const Brand = require("../models/brandModel");

exports.addCar = async (req, res) => {
  try {
    const sName = req.body.sName;
    const iBrandsID = req.body.iBrandsID;

    const oBrand = await Brand.findOne({ _id: iBrandsID });
    // console.log(oBrand);
    if (!oBrand) {
      return res.status(404).json({ sMessage: "Car Brand Not Found" });
    }

    const car = await Car.create({ sName, iBrands: iBrandsID });

    return res
      .status(200)
      .json({ sMessage: "Car Added Successfully", oCar: car });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
