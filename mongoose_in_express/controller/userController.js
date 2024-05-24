const User = require("../models/userModel");

exports.addUser = async (req, res) => {
  try {
    const sName = req.body.sName;
    const sCity = req.body.sCity;
    const eStatus = req.body.eStatus;

    const user = await User.create({ sName, sCity, eStatus });

    return res
      .status(200)
      .json({ sMessage: "User Added Successfully", oUser: user });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
