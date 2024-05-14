exports.isValidAdmin = (req, res, next) => {
  try {
    const sName = req.body.sName;
    const sPassword = req.body.sPassword;

    if (!sName || !sPassword) {
      return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
