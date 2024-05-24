const User = require("../models/userModel");

exports.addUser = async (req, res) => {
  try {
    const sName = req.body.sName;
    const sCity = req.body.sCity;
<<<<<<< HEAD
    const eStatus = req.body.eStatus;

    const user = await User.create({ sName, sCity, eStatus });
=======

    const user = await User.create({ sName, sCity });
>>>>>>> parent of c97a563 (cron job to update user status)

    return res
      .status(200)
      .json({ sMessage: "User Added Successfully", oUser: user });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
