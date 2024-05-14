exports.isValidTransaction = (req, res, next) => {
  try {
    const iUsersID = req.body.iUsersID;
    const iSellersID = req.body.iSellersID;
    const iCarsID = req.body.iCarsID;

    if (!iUsersID || !iSellersID || !iCarsID) {
      return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
