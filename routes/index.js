const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Cryptic Club" });
});

// GET logout page.
router.get("/logout", (req, res, next) => {
  // Log out the user
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // Render the logout page
    res.render("logout", {title: "Logout"});
  });
});

module.exports = router;