const fs = require("fs");
const bcrypt = require("bcrypt");

function writeData(data) {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./userData.json", stringifyData);
}

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = req.userData;

    const findUserIdx = userData.findIndex((user) => user.email === email);
    if (findUserIdx != -1) {
      return res.status(403).json({ message: "User is Already Exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);

    userData.push({ email, password: encryptedPass });
    writeData(userData);

    return res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: error.message });
  }
};

exports.getAllUser = (req, res) => {
  try {
    return res.status(200).json({ message: "All Users", data: req.userData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: error.message });
  }
};

exports.searchUser = (req, res) => {
  try {
    const { search } = req.params;
    const userData = req.userData;

    const findUser = userData.filter((user) => {
      return user.email.split("@")[0].includes(search);
    });

    if (findUser.length == 0) {
      return res.status(404).json({ message: "User Not Exist" });
    }

    return res
      .status(200)
      .json({ message: "Here is your User", data: findUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: error.message });
  }
};

exports.updateUserEmail = (req, res) => {
  try {
    const { email, newEmail } = req.body;
    const userData = req.userData;

    for (const user of userData) {
      if (user.email === email) {
        user.email = newEmail;
        break;
      }
    }

    writeData(userData);

    return res.status(200).json({ message: "User Email updated SuccessFully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: error.message });
  }
};

exports.updateUserPassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const userData = req.userData;

    const UserIdx = userData.findIndex((user) => user.email === email);
    if (UserIdx == -1) {
      return res.status(404).json({ message: "User Not Exist" });
    }

    const match = await bcrypt.compare(oldPassword, userData[UserIdx].password);
    if (!match) {
      return res.status(404).json({ message: "Password Does not Match" });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(newPassword, salt);

    userData[UserIdx].password = encryptedPass;
    writeData(userData);

    return res
      .status(200)
      .json({ message: "User Password updated SuccessFully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: error.message });
  }
};

exports.deleteUser = (req, res) => {
  try {
    const { email } = req.body;
    const userData = req.userData;

    const findUserIdx = userData.findIndex((user) => {
      return user.email === email;
    });

    if (findUserIdx == -1) {
      return res.status(404).json({ message: "User Not Exist" });
    }

    userData.splice(findUserIdx, 1);
    writeData(userData);

    return res.status(200).json({ message: "User deleted SuccessFully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: error.message });
  }
};
