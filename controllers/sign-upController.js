const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

// GET sign-up page
exports.getSignUpPage = (req, res, next) => {
  res.render("sign-up", { title: "Sign Up", error: null });
};

// POST sign-up page
exports.postSignUpPage = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  // Check for empty fields
  if (!username || !password) {
    return res
      .status(400)
      .render("sign-up", {
        title: "Sign Up",
        error: "All fields are required",
      });
  }

  // Check password length
  if (password.length < 8) {
    return res
      .status(400)
      .render("sign-up", {
        title: "Sign Up",
        error: "Password must be at least 8 characters long",
      });
  }

  // Check if username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res
      .status(400)
      .render("sign-up", {
        title: "Sign Up",
        error: "Username is already taken",
      });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password: hashedPassword });

  res.redirect("/");
});
