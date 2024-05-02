const jwt = require("jsonwebtoken");
const config = require("../utils/config");

exports.checkUserAuth = async (req, res, next) => {
  try {
    const token = req.header("authorization");

    if (!token) {
      return res.status(401).json({
        message: "Token Missing",
      });
    }

    const decodePayload = jwt.verify(token, config.JWT_SECRET);
    if (decodePayload.role != "user") {
      return res
        .status(400)
        .json({ message: "You are not authorized for this route" });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: error.message });
  }
};
