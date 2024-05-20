const File = require("../model/uploadFileModel");

exports.uploadFile = async (req, res) => {
  try {
    return res.status(200).json({ sMessage: "File Upload Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
