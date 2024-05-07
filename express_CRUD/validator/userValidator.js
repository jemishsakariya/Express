exports.isValidForRegister = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(404)
        .json({ message: "Email or Password Can not be Blank" });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/;

    if (!emailRegex.test(email) || !passRegex.test(password)) {
      return res.status(400).json({ message: "Email or Password is Invalid" });
    }

    return next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
