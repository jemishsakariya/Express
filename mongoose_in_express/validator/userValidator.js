exports.isValidUser = (req, res, next) => {
  try {
    const sName = req.body.sName;
    const sCity = req.body.sCity;
    const eStatus = req.body.eStatus;

<<<<<<< HEAD
    if (!sName || !sCity || !eStatus) {
=======
    if (!sName || !sCity) {
>>>>>>> parent of c97a563 (cron job to update user status)
      return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
