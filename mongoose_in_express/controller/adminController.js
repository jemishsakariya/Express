const Admin = require("../models/adminModel");

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