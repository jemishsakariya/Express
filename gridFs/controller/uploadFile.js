exports.uploadFile = async (req, res) => {
  try {
    
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
