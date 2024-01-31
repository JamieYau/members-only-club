const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

// GET sign-up page
exports.getSignUpPage = (req, res, next) => {
  res.render("sign-up", { title: "Sign Up", error: null });
};

// POST sign-up page with Express Validator
exports.postSignUpPage = asyncHandler(async (req, res, next) => {
  // Validation using express-validator
  await body("username").isLength({ min: 3, max: 30 }).trim().run(req);
  await body("password").isLength({ min: 8 }).trim().run(req);
  await body("confirmPassword")
    .equals(req.body.password)
    .withMessage("Passwords do not match")
    .run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render("sign-up", {
      title: "Sign Up",
      error: errors.array()[0].msg,
    });
  }

  const { username, password } = req.body;

  // Check if username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).render("sign-up", {
      title: "Sign Up",
      error: "Username is already taken",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password: hashedPassword });

  res.redirect("/");
});
