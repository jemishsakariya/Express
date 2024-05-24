const Admin = require("../models/adminModel");
const Car = require("../models/carModel");
const Trasaction = require("../models/transactionModel");

exports.addAdmin = async (req, res) => {
  try {
    const { sName, sPassword } = req.body;

    const admin = await Admin.create({ sName, sPassword });

    return res
      .status(200)
      .json({ sMessage: "Admin Added Successfully", oAdmin: admin });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};

exports.totalSoldCars = async (_req, res) => {
  try {
    const totalSoldCars = await Trasaction.aggregate([
      { $group: { _id: null, countOfTotalCarsSold: { $sum: 1 } } },
    ]);

    return res.status(200).json({ totalSoldCars });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
