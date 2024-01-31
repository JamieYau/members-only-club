const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get("/", indexController.getIndexPage);

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