const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// GET sign-up page
exports.getSignUpPage = (req, res, next) => {
  res.render("sign-up", { title: "Sign Up" });
};

// POST sign-up page
exports.postSignUpPage = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  res.redirect("/");
});