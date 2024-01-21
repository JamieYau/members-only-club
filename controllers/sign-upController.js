const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

// GET sign-up page
exports.getSignUpPage = (req, res, next) => {
  res.render("sign-up", { title: "Sign Up" });
};
