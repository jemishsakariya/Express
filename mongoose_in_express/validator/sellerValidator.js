exports.isValidSaller = (req, res, next) => {
  try {
    const sName = req.body.sName;
    const sCity = req.body.sCity;
    const aCarsIDs = req.body.aCarsIDs;

    if (!sName || !sCity || !aCarsIDs) {
      return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
