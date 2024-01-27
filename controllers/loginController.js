const passport = require('passport')

// GET Login Page
exports.getLoginPage = (req, res, next) => {
  res.render("login", { title: "Login", error: null });
};

// POST Login Page
exports.postLoginPage = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});
