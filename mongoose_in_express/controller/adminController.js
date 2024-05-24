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

    // const totalSoldCars = await Trasaction.countDocuments();

    return res.status(200).json({ totalSoldCars });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};

exports.carSoldMostInCity = async (_req, res) => {
  try {
    const carsoldmostinCity = await Trasaction.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "iUsersID",
          foreignField: "_id",
          as: "userCollection",
        },
      },
      {
        $unwind: "$userCollection",
      },
      {
        $group: {
          _id: "$userCollection.sCity",
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 1,
      },
    ]);

    return res.status(200).json({ carsoldmostinCity });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};

exports.mostSoldCar = async (_req, res) => {
  try {
    const mostSoldCar = await Trasaction.aggregate([
      {
        $lookup: {
          from: "cars",
          localField: "iCarsID",
          foreignField: "_id",
          as: "userCollection",
        },
      },
      {
        $unwind: "$userCollection",
      },
      {
        $group: {
          _id: "$userCollection.sName",
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
      {
        $limit: 1,
      },
    ]);

    return res.status(200).json({ mostSoldCar });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
