exports.uploadFile = async (req, res) => {
  try {
    if (req.fileValidationError) {
      return res.status(400).json({
        message: req.fileValidationError,
      });
    }

    return res.status(200).json({
      sMessage: "File has been uploaded!",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
