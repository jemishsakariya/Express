const Brand = require("../models/brandModel");

exports.addBrand = async (req, res) => {
  try {
    const sName = req.body.sName;

    const brand = await Brand.create({ sName });

    return res.status(200).json({
      sMessage: "Brand Added Successfully",
      oData: brand,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
