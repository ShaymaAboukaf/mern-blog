const bcryptjs = require("bcryptjs");
const User = require("../models/userModel");
const errorHandler = require("../utils/error");
exports.signup = async (req, res, next) => {
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
      next(errorHandler(400, "All fields are required"));
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({
      status: "success",
      data: { user: newUser },
    });
  } catch (err) {
    next(err);
  }
};
