const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

// GET Login Page
exports.getLoginPage = (req, res, next) => {
  res.render("login", { title: "Login", error: null });
};
