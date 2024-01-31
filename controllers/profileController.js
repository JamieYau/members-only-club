const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

// GET Profile page
exports.getProfilePage = (req, res, next) => {
  res.render("profile", { title: "Profile" });
};

// POST Profile member form
exports.postUpdateMembership = asyncHandler(async (req, res, next) => {
  const { secret } = req.body;

  // Check if the secret key is correct
  if (secret === process.env.SECRET_KEY) {
    // Update the user's membershipStatus
    await User.findByIdAndUpdate(req.user._id, { membershipStatus: true });

    // Redirect back to the profile page or any other desired page
    return res.redirect("/profile");
  } else {
    // Handle incorrect secret key
    return res.render("profile", {
      title: "Profile",
      error: "Incorrect secret key. Please try again.",
    });
  }
});