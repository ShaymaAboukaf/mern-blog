const bcryptjs = require("bcryptjs");
const User = require("../models/userModel");
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({
      status: "success",
      data: { user: newUser },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};
